import { useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import "../styles/globals.css";
import translations from "../translations.json";
i18n.use(initReactI18next).init({
  resources: translations,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation();
  useEffect(() => {
    const lang = window.localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
