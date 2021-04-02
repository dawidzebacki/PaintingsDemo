import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "../translations";
import { I18nextProvider } from "react-i18next";

import "../scss/app.scss";

const Application = ({ Component, pageProps }) => {
  const [lang, setLang] = useState(null);

  useEffect(() => {
    const detectBrowserLanguage = require("detect-browser-language");
    setLang(detectBrowserLanguage());
  }, []);

  if (typeof window !== "undefined") {
    i18n.use(initReactI18next).init({
      lng: localStorage.getItem("lang") || lang,
      resources,
      fallbackLng: "pl",
    });
  }

  return <Component {...pageProps} />;
};

export default Application;
