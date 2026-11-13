import emailjs from "@emailjs/browser";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "/firebase";

// Keep the established EmailJS template fields and original administrator-entered content.
// Reject failures so the UI can distinguish a published poster from undelivered mail.
export const sendEventEmailToSubscribers = async (eventDetails) => {
  if (!eventDetails.name || !eventDetails.date || !eventDetails.description) {
    throw new Error("Missing event details");
  }
  const snapshot = await getDocs(collection(getFirestore(app), "subscribers"));
  const emails = snapshot.docs
    .map((doc) => doc.data().email)
    .filter((email) => typeof email === "string" && email);
  if (!emails.length) return;
  const service = import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID;
  const template = import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (!service || !template || !publicKey)
    throw new Error("Email notification configuration unavailable");
  let failed = false;
  for (let i = 0; i < emails.length; i += 10) {
    const results = await Promise.allSettled(
      emails.slice(i, i + 10).map((email) =>
        emailjs.send(
          service,
          template,
          {
            to_email: email,
            event_name: eventDetails.name,
            event_date: eventDetails.date,
            event_location: eventDetails.location,
            event_description: eventDetails.description,
          },
          publicKey,
        ),
      ),
    );
    if (results.some((result) => result.status === "rejected")) failed = true;
    if (i + 10 < emails.length)
      await new Promise((resolve) => setTimeout(resolve, 500));
  }
  if (failed)
    throw new Error("Some event notifications could not be delivered");
};
