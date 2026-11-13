import { MapPin, Clock } from "lucide-react";
import {
  ActionLink,
  PageIntro,
  PhotoCarousel,
  SocialLinks,
} from "../components/SiteUI";
import { useLanguage } from "../i18n/context";
import maps from "../lib/maps.json";

const congregations = {
  ep: {
    city: "El Paso",
    address: "915 Delta Drive, El Paso, Texas",
    hero: "/rocaEP.jpg",
    sunday: "11:00 am – 1:30 pm",
    weekday: "friday",
    time: "7:00 pm – 9:00 pm",
    map: maps.ServiceEP,
    youth: "Roca & Potencia Generacion 316",
    youthImages: ["/ep6.jpg", "/ep7.jpg", "/jovenesEP1.JPG", "/jovenesEP2.JPG"],
    kids: [
      "/ep1.jpg",
      "/ep2.jpg",
      "/ep3.jpg",
      "/ep5.jpg",
      "/rocakids.JPG",
      "/rocakids2.JPG",
    ],
    instagram:
      "https://www.instagram.com/rocapotencia_yth?igsh=c2l2bXUzcTRiODNp",
    whatsapp: "https://chat.whatsapp.com/L6GDaOYaCLR8zCUn7NPgPx",
  },
  jz: {
    city: "Ciudad Juárez",
    address: "Av 5 de Febrero 1927, 32240 Juárez, Chih., Mexico",
    hero: "/roca4.jpg",
    sunday: "2:30 pm – 4:30 pm",
    weekday: "thursday",
    time: "6:00 pm – 8:00 pm",
    map: maps.ServiceJZ,
    youth: "Roca & Potencia Youth",
    youthImages: [
      "/JZJ.jpg",
      "/JZJ2.jpg",
      "/JZJ3.jpg",
      "/JZJ4.jpg",
      "/JZJ5.jpg",
      "/JZJ6.jpg",
    ],
    kids: ["/jz3.jpg", "/roca2.jpg", "/jz8.jpg", "/jz12.jpg", "/jz7.jpg"],
    instagram:
      "https://www.instagram.com/proposito_jovenes?igsh=YWJjbzRxajl2eXV2&utm_source=qr",
    whatsapp: "https://chat.whatsapp.com/JA89oqduxHmLFg90vGdmbz",
  },
};
export default function Congregation({ location }) {
  const { t } = useLanguage();
  const data = congregations[location];
  return (
    <>
      <PageIntro
        eyebrow={`ROCA Y POTENCIA · ${t("services.visit")}`}
        title={data.city}
        description={t("footer.message")}
        image={data.hero}
        alt={t("home.photo")}
      />
      <section className="container section visit-grid">
        <div>
          <p className="eyebrow">{t("services.visit")}</p>
          <h2>
            Roca y Potencia
            <br />
            {data.city}
          </h2>
          <p className="address">
            <MapPin aria-hidden="true" />
            {data.address}
          </p>
          <a
            className="button"
            href={data.map}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("common.directions")} ↗
          </a>
        </div>
        <div className="schedule-card">
          <h3>
            <Clock aria-hidden="true" />
            {t("services.schedule")}
          </h3>
          <dl>
            <div>
              <dt>{t("services.sunday")}</dt>
              <dd>{data.sunday}</dd>
            </div>
            <div>
              <dt>{t(`services.${data.weekday}`)}</dt>
              <dd>{data.time}</dd>
            </div>
            {location === "ep" && (
              <div>
                <dt>{t("services.school")}</dt>
                <dd>{t("services.sunday")} · 9:00 am – 10:30 am</dd>
              </div>
            )}
          </dl>
        </div>
      </section>
      <section className="container section section-divider">
        <p className="eyebrow">ROCA Y POTENCIA</p>
        <h2>{t("services.kids")}</h2>
        <PhotoCarousel images={data.kids} alt={t("services.kidsPhoto")} />
      </section>
      <section className="youth-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("services.youth")}</p>
              <h2>{data.youth}</h2>
            </div>
            <div>
              <p>
                {t(
                  location === "ep"
                    ? "services.everyFriday"
                    : "services.monday",
                )}
                <br />
                {location === "ep" ? "7:00 pm – 9:00 pm" : "8:30 pm – 9:30 pm"}
              </p>
              <SocialLinks
                instagram={data.instagram}
                whatsapp={data.whatsapp}
              />
            </div>
          </div>
          <PhotoCarousel
            images={data.youthImages}
            alt={t("services.youthPhoto")}
          />
          {location === "ep" ? (
            <div className="video-block">
              <video
                src="/videos/jovenes3.mp4"
                controls
                preload="none"
                aria-label={t("services.video")}
              />
              <p className="small-copy">{t("services.videoText")}</p>
            </div>
          ) : (
            <img
              className="ministry-poster"
              src="/jzLunes.jpg"
              alt={t("services.poster")}
              loading="lazy"
            />
          )}
          <div className="section-end">
            <ActionLink to="/eventos">{t("common.events")}</ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
