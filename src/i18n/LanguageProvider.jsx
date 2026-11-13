import { useEffect, useState } from "react";
import es from "./es.json";
import en from "./en.json";
import { LanguageContext } from "./context";

const dictionaries = { es, en };
const read = (dictionary, key) =>
  key.split(".").reduce((value, part) => value?.[part], dictionary);
export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("roca-language") === "en" ? "en" : "es";
    } catch {
      return "es";
    }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("roca-language", language);
    } catch {
      /* Preferences remain available in memory. */
    }
  }, [language]);
  const t = (key, values = {}) => {
    const text = read(dictionaries[language], key) ?? read(es, key) ?? key;
    return String(text).replace(
      /\{(\w+)\}/g,
      (match, name) => values[name] ?? match,
    );
  };
  const formatDate = (value) =>
    new Intl.DateTimeFormat(language === "es" ? "es-MX" : "en-US", {
      dateStyle: "long",
    }).format(new Date(`${value}T12:00:00`));
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, formatDate }}>
      {children}
    </LanguageContext.Provider>
  );
}
