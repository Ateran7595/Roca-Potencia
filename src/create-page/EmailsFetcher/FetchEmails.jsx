import emailjs from '@emailjs/browser';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '/firebase';

export const sendEventEmailToSubscribers = async (eventDetails) => {
  try {
    // Validate event details before proceeding
    if (!eventDetails.name || !eventDetails.date || !eventDetails.description) {
      console.error('Missing event details. Email not sent.');
      return;
    }

    const db = getFirestore(app);
    const subscribersSnapshot = await getDocs(collection(db, 'subscribers'));

    // Extract and filter emails
    const emails = subscribersSnapshot.docs
      .map(doc => doc.data().email)
      .filter(email => email && typeof email === 'string');

    if (emails.length === 0) {
      console.warn('No subscribers found. Skipping email sending.');
      return;
    }

    console.log(`Sending event emails to ${emails.length} subscribers...`);

    const batchSize = 10; // Adjust batch size if needed
    for (let i = 0; i < emails.length; i += batchSize) {
      const batch = emails.slice(i, i + batchSize);

      await Promise.all(
        batch.map(async (email) => {
          try {
            const response = await emailjs.send(
              import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID, 
              import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
              {
                to_email: email,
                event_name: eventDetails.name,
                event_date: eventDetails.date,
                event_location: eventDetails.location,
                event_description: eventDetails.description,
              },
              import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            console.log(`Email sent to ${email}:`, response);
          } catch (error) {
            console.error(`Error sending email to ${email}:`, error);
          }
        })
      );

      // Add a short delay between batches to prevent rate-limiting issues
      await new Promise(resolve => setTimeout(resolve, 500)); 
    }

    console.log('All event emails sent successfully!');
  } catch (error) {
    console.error('Error fetching subscribers or sending emails:', error);
  }
};