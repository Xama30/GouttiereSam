import imgProtegeGouttiere from "../public/img/protege-gouttiere-installe-par-gouttiere-rive-sud.png";
import imgGouttieresPleines from "../public/img/avant6.jpg";

import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useNextI18n } from "../src/i18n/next-i18n-context";

const Header = dynamic(() => import("../component/Header"));
const Footer = dynamic(() => import("../component/Footer"));
const TopMainPage = dynamic(() => import("../component/TopMainPage"));
const BoxTxtTitleIn = dynamic(() => import("../component/BoxTxt_TitleIn"));
const CardInfo = dynamic(() => import("../component/Card_Info"));
const NumBar = dynamic(() => import("../component/NumBar"));
const BorderTitle = dynamic(() => import("../component/BorderTitle"));

function Informations() {
  const { t, get } = useNextI18n();
  const cards = get("nextPages.infoGouttieres.cards", []);

  return (
    <div>
      <Head>
        <title key="title">{t("nextPages.infoGouttieres.headTitle")}</title>
        <meta
          name="description"
          content={t("nextPages.infoGouttieres.headDescription")}
          key="description"
        />
        <link
          rel="canonical"
          href="https://entretiensgouttieresrivesud.ca/Tout-savoir-sur-les-gouttieres"
          key="canonical"
        />
      </Head>
      <Header />
      <TopMainPage
        title={t("nextPages.infoGouttieres.topTitle")}
        text={t("nextPages.infoGouttieres.topText")}
      />
      <section id="section__BoxTxtTitleIn">
        <div className="section__BoxTxtTitleIn-content">
          <BoxTxtTitleIn
            color="L"
            title={t("nextPages.infoGouttieres.whyTitle")}
            texts={get("nextPages.infoGouttieres.whyTexts", [])}
            detail="T"
            className="boxTxtIn_L"
            route="/Pourquoi-entretenir-ses-gouttieres"
          />
          <BoxTxtTitleIn
            color="G"
            title={t("nextPages.infoGouttieres.whenTitle")}
            texts={get("nextPages.infoGouttieres.whenTexts", [])}
            detail="T"
            route="/Quand-nettoyer-ses-gouttieres"
          />
        </div>
        <div className="img-container">
          <Image
            src={imgGouttieresPleines}
            alt={t("nextPages.infoGouttieres.leadImageAlt")}
          />
        </div>
      </section>
      <section id="Info__TCarte">
        {cards.map((card, index) => (
          <CardInfo
            key={index}
            title={card.title}
            text={card.text}
            route={card.route}
          />
        ))}
      </section>
      <NumBar />
      <div className="title__IG">
        <h2>{t("nextPages.infoGouttieres.generalInfoTitle")}</h2>
      </div>
      <section id="Info__Gouttiere">
        <div className="InfoGouttiere">
          <BorderTitle
            title={t("nextPages.infoGouttieres.guttersTitle")}
            text={t("nextPages.infoGouttieres.guttersText")}
            detail="T"
            link={t("nextPages.infoGouttieres.guttersLink")}
          />
        </div>
        <BorderTitle
          title={t("nextPages.infoGouttieres.guardsTitle")}
          text={t("nextPages.infoGouttieres.guardsText")}
          detail="T"
          link={t("nextPages.infoGouttieres.guardsLink")}
        />
        <div className="img-container">
          <Image
            src={imgProtegeGouttiere}
            alt={t("nextPages.infoGouttieres.bottomImageAlt")}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Informations;
