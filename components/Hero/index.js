import React from "react";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="hero__text">
        <h1>{t("Hero.Title")}</h1>
        <hr />
        <div className="hero__about">
          <div>
            <img
              alt="illustration"
              src="/images/illustration.svg"
              width={64}
              height={64}
            />
            <h2>{t("Hero.ItemOneTitle")}</h2>
            <p>{t("Hero.ItemOneText")}</p>
          </div>
          <div>
            <img
              alt="painting"
              src="/images/painting.svg"
              width={64}
              height={64}
            />
            <h2>{t("Hero.ItemTwoTitle")}</h2>
            <p>{t("Hero.ItemTwoText")}</p>
          </div>
        </div>
        <div className="hero__about-text">
          <img
            alt="paint-brush"
            src="/images/paint-brush.svg"
            width={64}
            height={64}
          />
          <h2>{t("Hero.ItemThreeTitle")}</h2>
          <p>{t("Hero.ItemThreeText")}</p>
        </div>
      </div>
      <div className="hero__image">
        <img
          alt="painter"
          src="/images/painter.svg"
        />
      </div>
    </div>
  );
};

export default Hero;
