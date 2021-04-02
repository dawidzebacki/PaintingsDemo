import React from "react";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <p>
        developed with love by{" "}
        <a href="https://www.linkedin.com/in/dawidzebacki/">Dawid Zębacki</a>
      </p>
    </div>
  );
};

export default Footer;
