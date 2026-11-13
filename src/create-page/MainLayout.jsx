import { useEffect, useRef } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import Header from "./Header";
import { useLanguage } from "../i18n/context";
import { SocialLinks } from "../components/SiteUI";
import useScrollReveal from "../lib/useScrollReveal";

const pageKeys = {
  "/": "home",
  "/acerca": "about",
  "/eventos": "events",
  "/bienvenida": "welcome",
  "/serviceep": "ep",
  "/servicejz": "jz",
};
export default function MainLayout() {
  const { t } = useLanguage();
  const { pathname, hash } = useLocation();
  const mainRef = useRef(null);
  useEffect(() => {
    document.title = `${t(`seo.${pageKeys[pathname] || "home"}`)} | Roca y Potencia`;
    document.querySelector('meta[name="description"]').content =
      t("seo.description");
  }, [pathname, t]);
  useEffect(() => {
    if (hash)
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    else {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
  }, [pathname, hash]);
  useScrollReveal(mainRef, pathname);
  return (
    <>
      <a className="skip-link" href="#main-content">
        {t("nav.skip")}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} ref={mainRef}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link className="brand" to="/">
              <img src="/RPlogo.png" alt="" width="48" height="48" />
              <span>Roca y Potencia</span>
            </Link>
            <p>{t("footer.message")}</p>
            <SocialLinks />
          </div>
          <div>
            <h2>{t("footer.explore")}</h2>
            <Link to="/acerca">{t("nav.about")}</Link>
            <Link to="/eventos">{t("common.events")}</Link>
            <Link to="/bienvenida">{t("nav.visit")}</Link>
          </div>
          <div>
            <h2>{t("footer.find")}</h2>
            <Link to="/serviceep">El Paso, Texas</Link>
            <p>
              915 Delta Drive
              <br />
              El Paso, Texas
            </p>
            <Link to="/servicejz">Ciudad Juárez, Chihuahua</Link>
            <p>
              Av 5 de Febrero 1927
              <br />
              32240 Juárez, Chih., Mexico
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} {t("footer.rights")}
          </span>
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              })
            }
          >
            {t("common.top")} ↑
          </button>
        </div>
      </footer>
    </>
  );
}
