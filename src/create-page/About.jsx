import { ActionLink, PageIntro, PhotoCarousel } from "../components/SiteUI";
import { useLanguage } from "../i18n/context";
export default function About() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        image="/aboutRP.jpg"
        alt={t("about.photo")}
      />
      <section className="container section editorial">
        <div>
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h2>{t("about.mission")}</h2>
        </div>
        <div className="prose">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
      </section>
      <section className="verse-section">
        <div className="container">
          <blockquote>“{t("about.verse")}”</blockquote>
          <p>{t("about.reference")}</p>
        </div>
      </section>
      <section className="container section">
        <PhotoCarousel images={["/roca3.jpg", "/jz13.jpg", "/jz10.jpg"]} />
        <div className="section-end">
          <ActionLink to="/bienvenida">{t("nav.visit")}</ActionLink>
        </div>
      </section>
    </>
  );
}
