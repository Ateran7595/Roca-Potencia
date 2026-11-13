import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/context";
export default function Services() {
  const { t } = useLanguage();
  return (
    <section id="service" className="congregations section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t("services.eyebrow")}</p>
            <h2>{t("services.title")}</h2>
          </div>
          <p>{t("services.intro")}</p>
        </div>
        <div className="location-grid">
          {[
            {
              city: "El Paso",
              state: "TEXAS",
              path: "/serviceep",
              image: "/rep.jpg",
              address: "915 Delta Drive, El Paso, Texas",
              time: "11:00 am – 1:30 pm",
            },
            {
              city: "Ciudad Juárez",
              state: "CHIHUAHUA",
              path: "/servicejz",
              image: "/RJ.jpg",
              address: "Av 5 de Febrero 1927, 32240 Juárez, Chih., Mexico",
              time: "2:30 pm – 4:30 pm",
            },
          ].map((item) => (
            <Link className="location-card" key={item.path} to={item.path}>
              <div className="location-photo">
                <img
                  src={item.image}
                  alt={`Roca y Potencia · ${item.city}`}
                  loading="lazy"
                />
                <span className="location-badge">{item.state}</span>
              </div>
              <div className="location-content">
                <div className="card-title">
                  <h3>{item.city}</h3>
                  <ArrowUpRight />
                </div>
                <p>
                  <MapPin size={15} aria-hidden="true" />
                  {item.address}
                </p>
                <div className="card-bottom">
                  <span>
                    {t("services.sunday")} · {item.time}
                  </span>
                  <span>{t("common.more")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
