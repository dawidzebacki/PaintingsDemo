import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <h1>{t("Contact.Title")}</h1>
      <p>{t("Contact.Text")}</p>
      <div>
        <a href="https://www.facebook.com/darek.zebacki">
          <Image
            alt="facebook"
            src="/images/facebook.svg"
            width={48}
            height={48}
          />
        </a>
        <a href="mailto:71Kerad19@protonmail.com">
          <Image alt="mail" src="/images/gmail.svg" width={48} height={48} />
        </a>
        <a href="tel:+4796819494">
          <Image
            alt="telephone"
            src="/images/telephone.svg"
            width={48}
            height={48}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
