import React, { useEffect } from "react";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { initGA, logPageView } from "./analytics";

const Layout = ({ children }) => {

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);


  return (
    <div className="app-wrapper">
      <Head>
        <title>Darek Zębacki - Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Description"
          content="Portfolio Obrazów - Darek Zębacki"
        ></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
