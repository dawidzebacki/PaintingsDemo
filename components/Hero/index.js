import React from "react";
import Image from "next/image";
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
            <Image
              alt="illustration"
              src="/images/illustration.svg"
              width={64}
              height={64}
            />
            <h2>{t("Hero.ItemOneTitle")}</h2>
            <p>{t("Hero.ItemOneText")}</p>
          </div>
          <div>
            <Image
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
          <Image
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
        <Image
          alt="painter"
          src="/images/painter.svg"
          width={512}
          height={512}
        />
      </div>
    </div>
  );
};

export default Hero;
