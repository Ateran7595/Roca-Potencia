import { PageIntro, ActionLink } from "../components/SiteUI";
import Services from "./Services";
import { useLanguage } from "../i18n/context";
export default function Welcome() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro
        eyebrow={t("welcome.eyebrow")}
        title={t("welcome.title")}
        description={t("home.intro")}
        image="/test5.jpg"
        alt="Roca y Potencia"
      />
      <section className="container section editorial">
        <h2>{t("welcome.heading")}</h2>
        <div className="prose">
          <p>{t("welcome.body")}</p>
          <blockquote>
            {t("welcome.verse")}
            <cite>{t("welcome.reference")}</cite>
          </blockquote>
          <ActionLink to="/">{t("common.explore")}</ActionLink>
        </div>
      </section>
      <Services />
    </>
  );
}
