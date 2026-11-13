import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/context";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/RPlogo.png" alt="" width="46" height="46" />
          <span>
            Roca y Potencia
            <span className="brand-sub">EL PASO · CIUDAD JUÁREZ</span>
          </span>
        </Link>
        <nav
          id="main-navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label={t("nav.main")}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.getElementById("menu-toggle").focus();
            }
          }}
        >
          <NavLink to="/" end onClick={() => setOpen(false)}>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/acerca" onClick={() => setOpen(false)}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/eventos" onClick={() => setOpen(false)}>
            {t("nav.events")}
          </NavLink>
          <Link to="/#service" onClick={() => setOpen(false)}>
            {t("nav.services")}
          </Link>
          <Link
            to="/bienvenida"
            className="mobile-visit"
            onClick={() => setOpen(false)}
          >
            {t("nav.visit")} <ArrowUpRight size={16} />
          </Link>
        </nav>
        <div className="header-actions">
          <div
            className="language-switch"
            role="group"
            aria-label={t("nav.language")}
          >
            {["es", "en"].map((lang) => (
              <button
                key={lang}
                lang={lang}
                aria-label={lang === "es" ? "Español" : "English"}
                aria-pressed={language === lang}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <Link to="/bienvenida" className="button header-visit">
            {t("nav.visit")}
            <ArrowUpRight size={16} />
          </Link>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-controls="main-navigation"
            aria-expanded={open}
            aria-label={t(open ? "nav.close" : "nav.menu")}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
