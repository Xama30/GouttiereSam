import React from 'react';
import Head from "next/head";
import '../src/App.css'; 
import "../src/CSS/Comment.css";
import "../src/CSS/ContactUs.css";
import '../src/CSS/FAQ.css';
import '../src/CSS/Gestion.css';
import '../src/CSS/Informations.css';
import '../src/CSS/Quand.css';
import '../src/CSS/Realisation.css';
import '../src/CSS/Services.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <base href="%{BASE}" />
        <link rel="icon" type="image/webp" href="./logo.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:site_name" content="Entretiens Grondin - Rive-Sud" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./logo.webp"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
