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
    <div className="flex flex-col gap-2 items-center p-4 rounded-lg w-[60%] border-white border-2 mt-5 font-roboto">
      <h2 className="text-xl font-bold text-center text-white text-[35px] ">Subscribete Para Recibir Informacion de Nuestros Proximos Eventos!</h2>
      <Input
        type="email"
        placeholder="Ingrese Correo Electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 p-2 border rounded-lg w-[60%] border-white text-white h-[40px]"
      />
      <Button onClick={handleSubscribe} className={"text-[22px] w-[60%] text-white font-bold h-[50px] rounded-xl border-2 border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-40 shadow-2xl"}>
        Subscribirse
      </Button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}

export default Newsletter;