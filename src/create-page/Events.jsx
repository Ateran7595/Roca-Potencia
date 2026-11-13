import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PageIntro } from "../components/SiteUI";
import { useLanguage } from "../i18n/context";
import LoginForm from "./LoginForm";
import EventFetcher from "./EventFetcher";
import Newsletter from "./Newsletter";

export default function Events() {
  const manageButton = useRef(null);
  const restoreManageFocus = (event) => {
    event.preventDefault();
    manageButton.current?.focus();
  };
  const { t, formatDate } = useLanguage();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [date, setDate] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [formError, setFormError] = useState("");
  useEffect(() => {
    if (!image) {
      setPreview("");
      return;
    }
    const url = URL.createObjectURL(image);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);
  const publish = async (e) => {
    e.preventDefault();
    if (busy) return;
    const form = e.currentTarget;
    if (
      !image ||
      !image.type.startsWith("image/") ||
      image.size > 10 * 1024 * 1024
    ) {
      setFormError("events.imageError");
      return;
    }
    if (!form.checkValidity()) {
      setFormError("form.required");
      return;
    }
    const fields = new FormData(form);
    const details = {
      name: fields.get("name").trim(),
      location: fields.get("location").trim(),
      date: fields.get("date"),
      description: fields.get("description").trim(),
    };
    if (!details.name || !details.location || !details.description) {
      setFormError("form.required");
      return;
    }
    setBusy(true);
    setFormError("");
    try {
      const [{ storageRP }, { ref, uploadBytes }] = await Promise.all([
        import("../../firebase"),
        import("firebase/storage"),
      ]);
      await uploadBytes(ref(storageRP, `images/${image.name}`), image);
      setRefresh((value) => value + 1);
      setImage(null);
      setDate("");
      setOpen(false);
      try {
        const { sendEventEmailToSubscribers } =
          await import("./EmailsFetcher/FetchEmails");
        await sendEventEmailToSubscribers(details);
        setStatus("events.success");
      } catch {
        setStatus("events.notificationError");
      }
    } catch {
      setFormError("common.error");
    } finally {
      setBusy(false);
    }
  };
  const logout = async () => {
    try {
      const [{ authRP }, { signOut }] = await Promise.all([
        import("../../firebase"),
        import("firebase/auth"),
      ]);
      await signOut(authRP);
      setIsAdmin(false);
    } catch {
      setStatus("common.error");
    }
  };
  return (
    <>
      <PageIntro
        eyebrow={t("events.eyebrow")}
        title={t("events.title")}
        description={t("events.intro")}
        image="/test4.jpg"
        alt="Roca y Potencia"
      />
      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t("common.events")}</p>
            <h2>{t("events.heading")}</h2>
          </div>
          <p>{t("events.description")}</p>
        </div>
        <EventFetcher refresh={refresh} isAdmin={isAdmin} />
        <div className="admin-actions">
          <button
            ref={manageButton}
            className="text-link"
            onClick={() => (isAdmin ? setOpen(true) : setShowLogin(true))}
          >
            {t("events.manage")} ↗
          </button>
          {isAdmin && (
            <button className="text-link" onClick={logout}>
              {t("events.logout")}
            </button>
          )}
        </div>
        <p className="form-status" role="status">
          {status && t(status)}
        </p>
      </section>
      <Newsletter />
      <LoginForm
        onCloseAutoFocus={restoreManageFocus}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        onSuccess={() => {
          setIsAdmin(true);
          setShowLogin(false);
        }}
      />
      <Dialog
        open={open}
        onOpenChange={(value) => {
          if (!busy) setOpen(value);
        }}
      >
        <DialogContent
          className="site-dialog"
          onCloseAutoFocus={restoreManageFocus}
        >
          <DialogHeader>
            <DialogTitle>{t("events.add")}</DialogTitle>
            <DialogDescription>
              {t("events.adminDescription")}
            </DialogDescription>
          </DialogHeader>
          <form
            className="stack-form"
            noValidate
            onSubmit={publish}
            aria-busy={busy}
          >
            <label htmlFor="event-image">{t("events.image")}</label>
            <input
              id="event-image"
              type="file"
              accept="image/*"
              required
              onChange={(e) => {
                setImage(e.target.files?.[0] || null);
                setFormError("");
              }}
            />
            {preview && (
              <img
                className="upload-preview"
                src={preview}
                alt={t("events.preview")}
              />
            )}
            {[
              ["name", "events.name", "text", "events.namePlaceholder"],
              [
                "location",
                "events.location",
                "text",
                "events.locationPlaceholder",
              ],
            ].map(([name, label, type, placeholder]) => (
              <div className="field" key={name}>
                <label htmlFor={`event-${name}`}>{t(label)}</label>
                <input
                  id={`event-${name}`}
                  name={name}
                  type={type}
                  placeholder={t(placeholder)}
                  required
                />
              </div>
            ))}
            <label htmlFor="event-date">{t("events.date")}</label>
            <input
              id="event-date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            {date && (
              <p className="small-copy">
                {t("events.selectedDate", { date: formatDate(date) })}
              </p>
            )}
            <label htmlFor="event-description">
              {t("events.descriptionLabel")}
            </label>
            <textarea
              id="event-description"
              name="description"
              placeholder={t("events.descriptionPlaceholder")}
              required
              rows={4}
            />
            <p className="form-status" role="alert">
              {formError && t(formError)}
            </p>
            <button type="submit" className="button" disabled={busy}>
              {t(busy ? "events.publishing" : "events.publish")}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
