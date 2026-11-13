import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "../i18n/context";

export default function LoginForm({
  onSuccess,
  showLogin,
  setShowLogin,
  onCloseAutoFocus,
}) {
  const { t } = useLanguage();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    if (busy) return;
    const data = new FormData(e.currentTarget);
    if (!data.get("email") || !data.get("password")) {
      setError("form.required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email").trim())) {
      setError("form.emailError");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const [{ authRP }, { signInWithEmailAndPassword }] = await Promise.all([
        import("../../firebase"),
        import("firebase/auth"),
      ]);
      const credential = await signInWithEmailAndPassword(
        authRP,
        data.get("email").trim(),
        data.get("password"),
      );
      onSuccess(credential.user);
    } catch {
      setError("form.credentials");
    } finally {
      setBusy(false);
    }
  };
  return (
    <Dialog open={showLogin} onOpenChange={setShowLogin}>
      <DialogContent
        className="site-dialog"
        onCloseAutoFocus={onCloseAutoFocus}
      >
        <DialogHeader>
          <DialogTitle>{t("form.login")}</DialogTitle>
          <DialogDescription>{t("form.loginIntro")}</DialogDescription>
        </DialogHeader>
        <form
          noValidate
          className="stack-form"
          onSubmit={handleLogin}
          aria-busy={busy}
        >
          <label htmlFor="admin-email">{t("form.email")}</label>
          <input
            name="email"
            id="admin-email"
            type="email"
            autoComplete="username"
            required
          />
          <label htmlFor="admin-password">{t("form.password")}</label>
          <input
            id="admin-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <p role="alert" className="form-status">
            {error && t(error)}
          </p>
          <button className="button" type="submit" disabled={busy}>
            {t(busy ? "form.signingIn" : "form.signIn")}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
