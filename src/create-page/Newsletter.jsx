import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { app } from "/firebase";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      toast("Por Favor Ingrese correo valido.")
      return;
    }
    if(!email.includes('@gmail.com')){
      toast("Por Favor Subscribirse con Gmail")
      return;
    }

    try {
      const db = getFirestore(app);
      // Check if the email already exists in the "subscribers" collection
      const q = query(collection(db, "subscribers"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // If email exists, inform the user
        toast("Correo ya existente")
      } else {
        // If email doesn't exist, add the new subscriber
        await addDoc(collection(db, "subscribers"), { email });
        toast("Subscrito Exitosamente!")
      }

      setEmail(""); // Clear input field after action
    } catch (error) {
      console.error("Error subscribing:", error);
      toast("Subscripcion Fallida. Intente De Nuevo.")
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center p-4 rounded-lg md:w-[60%] xs:w-[95%] border-white border-solid border-2 mt-5">
      <Toaster />
      <h2 className="text-xl font-bold text-center text-white md:text-[35px] xs:text-[26px] ">Subscribete Para Recibir Informacion de Nuestros Proximos Eventos!</h2>
      <Input
        type="email"
        placeholder="Ingrese Correo Electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 p-2 border-solid rounded-lg md:w-[60%] border-white text-white h-[40px]"
      />
      <Button onClick={handleSubscribe} className={"text-[22px] md:w-[60%] xs:w-full text-white font-bold h-[50px] rounded-xl border-2 border-solid border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-40 shadow-2xl mt-2"}>
        Subscribirse
      </Button>
    </div>
  );
}

export default Newsletter;