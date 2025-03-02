import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "/firebase";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      const db = getFirestore(app);
      await addDoc(collection(db, "subscribers"), { email });
      setStatus("Subscribed successfully!");
      setEmail(""); // Clear input
    } catch (error) {
      console.error("Error subscribing:", error);
      setStatus("Subscription failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg w-[400px] mt-5">
      <h2 className="text-xl font-bold">Subscribe for Event Updates</h2>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 p-2 w-full border rounded-lg"
      />
      <Button onClick={handleSubscribe} className="mt-3 bg-blue-500 text-white w-full">
        Subscribe
      </Button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}

export default Newsletter;