import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "../i18n/context";
import { PhotoCarousel } from "../components/SiteUI";

export default function EventFetcher({ refresh, isAdmin }) {
  const { t } = useLanguage();
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("loading");
  const [deleting, setDeleting] = useState("");
  const fetchImages = useCallback(async () => {
    setStatus("loading");
    try {
      const [{ storageRP }, { listAll, ref, getDownloadURL }] =
        await Promise.all([
          import("../../firebase"),
          import("firebase/storage"),
        ]);
      const result = await listAll(ref(storageRP, "images/"));
      const urls = await Promise.all(
        result.items.map(async (item) => ({
          url: await getDownloadURL(item),
          path: item.fullPath,
          name: item.name,
        })),
      );
      setImages(urls);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);
  useEffect(() => {
    fetchImages();
  }, [fetchImages, refresh]);
  const handleDelete = async (path) => {
    if (!window.confirm(t("events.confirmDelete"))) return;
    setDeleting(path);
    try {
      const [{ storageRP }, { ref, deleteObject }] = await Promise.all([
        import("../../firebase"),
        import("firebase/storage"),
      ]);
      await deleteObject(ref(storageRP, path));
      await fetchImages();
    } catch {
      setStatus("error");
    } finally {
      setDeleting("");
    }
  };
  if (status === "loading")
    return (
      <div className="empty-state" role="status">
        {t("common.loading")}
      </div>
    );
  if (status === "error")
    return (
      <div className="empty-state">
        <p role="status">{t("events.error")}</p>
        <button className="button button-secondary" onClick={fetchImages}>
          {t("common.retry")}
        </button>
      </div>
    );
  if (!images.length) return <p className="empty-state">{t("events.empty")}</p>;
  return (
    <>
      <div className="event-gallery">
        <PhotoCarousel
          images={images.map((image) => image.url)}
          alt={t("events.heading")}
          alts={images.map((image) => t("events.poster", { name: image.name }))}
        />
      </div>
      <p className="small-copy">{t("events.original")}</p>
      {isAdmin && (
        <div className="event-admin-list">
          {images.map((image) => (
            <div key={image.path}>
              <span>{image.name}</span>
              <button
                className="button button-danger"
                disabled={Boolean(deleting)}
                onClick={() => handleDelete(image.path)}
              >
                {t(
                  deleting === image.path ? "common.loading" : "events.delete",
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
