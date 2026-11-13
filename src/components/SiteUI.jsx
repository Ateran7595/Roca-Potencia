import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../i18n/context";

export function ActionLink({ to, children, secondary = false }) {
  return (
    <Link className={`button ${secondary ? "button-secondary" : ""}`} to={to}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function PageIntro({ eyebrow, title, description, image, alt }) {
  return (
    <section className="page-intro container">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="intro-copy">{description}</p>}
      </div>
      {image && (
        <img
          className="intro-image"
          src={image}
          alt={alt}
          fetchPriority="high"
        />
      )}
    </section>
  );
}
export function PhotoCarousel({ images, alt, alts = [] }) {
  const { t } = useLanguage();
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  const move = (next) => {
    const items = track.current.children;
    const target = Math.max(0, Math.min(items.length - 1, next));
    track.current.scrollTo({
      left: items[target].offsetLeft - items[0].offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <div
      className="photo-carousel"
      role="region"
      aria-label={t("common.gallery")}
    >
      <div
        className="photo-track"
        ref={track}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            move(index + (e.key === "ArrowRight" ? 1 : -1));
          }
        }}
        onScroll={() => {
          const items = [...track.current.children];
          setIndex(
            items.reduce(
              (best, item, i) =>
                Math.abs(
                  item.offsetLeft -
                    items[0].offsetLeft -
                    track.current.scrollLeft,
                ) <
                Math.abs(
                  items[best].offsetLeft -
                    items[0].offsetLeft -
                    track.current.scrollLeft,
                )
                  ? i
                  : best,
              0,
            ),
          );
        }}
      >
        {images.map((src, imageIndex) => (
          <figure key={src}>
            <img
              src={src}
              alt={
                alts[imageIndex] ||
                `${alt || t("common.photo")} · ${t("common.slide", { current: imageIndex + 1, total: images.length })}`
              }
              loading="lazy"
            />
          </figure>
        ))}
      </div>
      <div className="carousel-controls">
        <span aria-live="polite">
          {t("common.slide", { current: index + 1, total: images.length })}
        </span>
        <div>
          <button
            className="icon-button"
            aria-label={t("common.previous")}
            onClick={() => move(index - 1)}
            disabled={index === 0}
          >
            <ArrowLeft />
          </button>
          <button
            className="icon-button"
            aria-label={t("common.next")}
            onClick={() => move(index + 1)}
            disabled={index === images.length - 1}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
export function SocialLinks({ instagram, whatsapp }) {
  return (
    <div className="social-links">
      {instagram ? (
        <>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </>
      ) : (
        <>
          <a
            href="https://www.facebook.com/IglesiaRocaYPotencia/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </a>
          <a
            href="https://www.youtube.com/channel/UCY4c8J0EmHRjKRu8js6L-hA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube />
          </a>
        </>
      )}
    </div>
  );
}
