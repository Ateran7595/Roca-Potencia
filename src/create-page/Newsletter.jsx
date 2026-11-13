import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "../i18n/context";

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const handleSubscribe = async (event) => {
    event.preventDefault();
    if (busy) return;
    const value = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("form.emailError");
      return;
    }
    if (!value.endsWith("@gmail.com")) {
      setStatus("form.gmail");
      return;
    }
    setBusy(true);
    setStatus("");
    try {
      const [{ db }, { collection, addDoc, query, where, getDocs }] =
        await Promise.all([
          import("../../firebase"),
          import("firebase/firestore"),
        ]);
      const result = await getDocs(
        query(collection(db, "subscribers"), where("email", "==", value)),
      );
      if (!result.empty) setStatus("form.duplicate");
      else {
        await addDoc(collection(db, "subscribers"), { email: value });
        setStatus("form.subscribed");
      }
      setEmail("");
    } catch {
      setStatus("common.error");
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className="newsletter-section section">
      <div className="container newsletter-grid">
        <div>
          <p className="eyebrow">
            <Mail size={16} aria-hidden="true" />
            {t("form.newsletterEyebrow")}
          </p>
          <h2>{t("form.newsletter")}</h2>
          <p>{t("form.newsletterIntro")}</p>
        </div>
        <form noValidate onSubmit={handleSubscribe} aria-busy={busy}>
          <label htmlFor="newsletter-email">{t("form.email")}</label>
          <div className="subscribe-row">
            <input
              id="newsletter-email"
              name="email"
              autoComplete="email"
              type="email"
              required
              placeholder={t("form.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="newsletter-note newsletter-status"
              aria-invalid={
                status === "form.emailError" || status === "form.gmail"
              }
            />
            <button className="button" disabled={busy} type="submit">
              {t(busy ? "form.subscribing" : "form.subscribe")}
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </div>
          <p id="newsletter-note" className="small-copy">
            {t("form.note")}
          </p>
          <p
            id="newsletter-status"
            className={`form-status ${status === "form.subscribed" ? "success" : ""}`}
            role="status"
          >
            {status && t(status)}
          </p>
        </form>
      </div>
    </section>
  );
}
