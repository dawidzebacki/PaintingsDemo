import React, { useState, useRef, useEffect } from "react";
import Layout from "../Layout";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Hero from "../components/Hero";
import GalleryComponent from "../components/Gallery";
import GalleryComponentPS from "../components/GalleryPS";
import Contact from "../components/Contact";
import Header from "../components/Header";

const Home = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    typeof window !== "undefined" ? localStorage.getItem("lang") : i18n.language
  );
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const galleryPSRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    switch (router.asPath) {
      case "/?about":
        heroRef.current.scrollIntoView({
          behavior: "smooth",
        });
        return;
      case "/?gallery":
        galleryRef.current.scrollIntoView({
          behavior: "smooth",
        });
        return;
      case "/?galleryps":
        galleryPSRef.current.scrollIntoView({
          behavior: "smooth",
        });
        return;
      case "/?contact":
        contactRef.current.scrollIntoView({
          behavior: "smooth",
        });
        return;
    }
  }, [router.query]);

  return (
    <Layout>
      <Header language={language} setLanguage={setLanguage} />
      <div className="id-wrapper" ref={heroRef}>
        <Hero />
      </div>

      <div className="id-wrapper" ref={galleryRef}>
        <GalleryComponent />
      </div>

      <div className="id-wrapper" ref={galleryPSRef}>
        <GalleryComponentPS />
      </div>

      <div className="id-wrapper" ref={contactRef}>
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
