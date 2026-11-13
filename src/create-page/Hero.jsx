import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Services from "./Services";
import Newsletter from "./Newsletter";
import { ActionLink, SocialLinks } from "../components/SiteUI";
import { useLanguage } from "../i18n/context";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <>
      <section className="home-hero">
        <div className="container hero-heading">
          <div>
            <p className="eyebrow">
              <span className="status-dot" />
              {t("home.eyebrow")}
            </p>
            <h1>{t("home.title")}</h1>
          </div>
          <div className="hero-aside">
            <p>{t("home.intro")}</p>
            <ActionLink to="/bienvenida">{t("nav.visit")}</ActionLink>
            <Link className="text-link" to="/acerca">
              {t("home.discover")}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="container">
          <figure className="hero-photo">
            <img
              src="/roca5.jpg"
              alt={t("home.photo")}
              fetchPriority="high"
              width="1600"
              height="1067"
            />
            <figcaption>
              <span>{t("home.photoLabel")}</span>
              <span>ROCA Y POTENCIA ↗</span>
            </figcaption>
          </figure>
          <a className="hero-scroll" href="#community">
            <span>{t("home.scroll")}</span>
            <ArrowDown size={17} />
          </a>
        </div>
      </section>
      <section className="container section welcome-section" id="community">
        <div>
          <p className="eyebrow">{t("home.welcome")}</p>
          <h2>{t("home.community")}</h2>
          <ActionLink to="/acerca" secondary>
            {t("nav.about")}
          </ActionLink>
        </div>
        <div className="welcome-copy">
          <p>{t("home.intro")}</p>
          <blockquote>{t("home.quote")}</blockquote>
          <strong>{t("home.hope")}</strong>
        </div>
      </section>
      <Services />
      <section className="container section community-feature">
        <img
          src="/jovenesEP2.JPG"
          alt={t("services.youthPhoto")}
          loading="lazy"
          width="1600"
          height="1067"
        />
        <div>
          <p className="eyebrow">{t("events.eyebrow")}</p>
          <h2>{t("events.title")}</h2>
          <p>{t("events.intro")}</p>
          <ActionLink to="/eventos">{t("common.events")}</ActionLink>
        </div>
      </section>
      <Newsletter />
      <section className="container social-section">
        <h2>{t("common.connect")}</h2>
        <SocialLinks />
      </section>
    </>
  );
}
