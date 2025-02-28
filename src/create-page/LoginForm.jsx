import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authRP } from "/firebase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const LoginForm = ({ onSuccess, onError, showLogin, setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(authRP, email, password);
      onSuccess(userCredential.user); // Pass user info to parent component
    } catch (err) {
      setError("Invalid credentials");
      onError();
    }
  };

  return (
    <Dialog open={showLogin} onOpenChange={setShowLogin}>
      <DialogContent className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Admin Login</DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
          Ingrese sus credenciales de administrador para continuar.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleLogin} className="flex flex-col space-y-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="bg-blue-600 text-white">Iniciar Sesion</Button>
        </form>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;