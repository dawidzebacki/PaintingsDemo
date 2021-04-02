import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Header = ({ language, setLanguage }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const handleChange = (e) => {
    if (e.target.value === "pl") {
      i18n.changeLanguage("pl");
      setLanguage("pl");
      localStorage.setItem("lang", "pl");
    } else if (e.target.value === "en") {
      i18n.changeLanguage("en");
      setLanguage("en");
      localStorage.setItem("lang", "en");
    } else {
      i18n.changeLanguage("no");
      setLanguage("no");
      localStorage.setItem("lang", "no");
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img alt="logo" src="/images/logo.png" width={64} height={64} />
      </div>
      <nav className="header-nav">
        <ul>
          <li
            onClick={() =>
              !router.pathname.includes("about") &&
              router.push({ query: "about" })
            }
          >
            {t("Header.About")}
          </li>
          <li
            onClick={() =>
              !router.pathname.includes("gallery") &&
              router.push({ query: "gallery" })
            }
          >
            {t("Header.Paintings")}
          </li>
          <li
            onClick={() =>
              !router.pathname.includes("contact") &&
              router.push({ query: "contact" })
            }
          >
            {t("Header.Contact")}
          </li>
          <li>
            <select value={language} onChange={(e) => handleChange(e)}>
              <option value="pl">PL</option>
              <option value="en">EN</option>
              <option value="no">NO</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
