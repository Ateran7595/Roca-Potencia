import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { app } from "/firebase";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("Por Favor Ingrese correo valido.");
      return;
    }

    try {
      const db = getFirestore(app);
      // Check if the email already exists in the "subscribers" collection
      const q = query(collection(db, "subscribers"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // If email exists, inform the user
        setStatus("Correo ya existente");
      } else {
        // If email doesn't exist, add the new subscriber
        await addDoc(collection(db, "subscribers"), { email });
        setStatus("Subscrito Exitosamente!");
      }

      setEmail(""); // Clear input field after action
    } catch (error) {
      console.error("Error subscribing:", error);
      setStatus("Subscripcion Fallida. Intente De Nuevo.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg w-[400px] mt-5">
      <h2 className="text-xl font-bold text-center">Subscribase Para Recibir Informacion de Nuestros Proximos Eventos!</h2>
      <Input
        type="email"
        placeholder="Ingrese Correo Electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 p-2 w-full border rounded-lg"
      />
      <Button onClick={handleSubscribe} className="mt-3 bg-blue-500 text-white w-full font-bold">
        Subscribirse
      </Button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}

export default Newsletter;