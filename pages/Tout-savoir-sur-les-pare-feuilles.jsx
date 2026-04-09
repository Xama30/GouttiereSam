import Images from "../public/img/Images";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useNextI18n } from "../src/i18n/next-i18n-context";

const Header = dynamic(() => import("../component/Header"));
const Footer = dynamic(() => import("../component/Footer"));
const NumBar = dynamic(() => import("../component/NumBar"));
const AccueilArticle = dynamic(() => import("../component/AccueilArticle"));
const BoxTxt = dynamic(() => import("../component/BoxTxt"));
const ListeArticleH2_H3_P = dynamic(
  () => import("../component/ListeArticleH2_H3_P"),
);
const H2_p_imgF = dynamic(() => import("../component/H2-P-ImgF"));
const Soumission = dynamic(() => import("../component/Soumission"));
const CarteForm = dynamic(() => import("../component/Carte_Form"));

function Parefeuilles() {
  const { t, get } = useNextI18n();

  const itemLists = get("nextPages.pareFeuilles.itemLists", []);
  const itemLists2 = get("nextPages.pareFeuilles.itemLists2", []);

  return (
    <div>
      <Head>
        <title key="title">{t("nextPages.pareFeuilles.headTitle")}</title>
        <meta
          name="description"
          content={t("nextPages.pareFeuilles.headDescription")}
          key="description"
        />
        <link
          rel="canonical"
          href="https://entretiensgouttieresrivesud.ca/Tout-savoir-sur-les-pare-feuilles"
          key="canonical"
        />
      </Head>
      <Header />
      <AccueilArticle
        titre={t("nextPages.pareFeuilles.accueilTitle")}
        soustitre={t("nextPages.pareFeuilles.accueilSubtitle")}
        imgsrc={Images.carte1}
        alt={t("nextPages.pareFeuilles.accueilAlt")}
      />
      <BoxTxt
        color="L"
        title={t("nextPages.pareFeuilles.installationTitle")}
        texts={get("nextPages.pareFeuilles.installationTexts", [])}
        detail="T"
        route="/Nos-Services"
      />
      <Soumission />
      <BoxTxt
        color="G"
        title={t("nextPages.pareFeuilles.definitionTitle")}
        texts={get("nextPages.pareFeuilles.definitionTexts", [])}
        detail="F"
      />
      <ListeArticleH2_H3_P
        titreh2={t("nextPages.pareFeuilles.advantagesTitle")}
        itemLists={itemLists}
      />
      <div className="img-container-parefeuille">
        <Image
          src={Images.Feuille}
          alt={t("nextPages.pareFeuilles.imageTopAlt")}
        />
      </div>
      <NumBar />
      <section id="Types__PareFeuilles">
        <H2_p_imgF
          title={t("nextPages.pareFeuilles.typesIntroTitle")}
          texts={get("nextPages.pareFeuilles.typesIntroTexts", [])}
        />
      </section>
      <ListeArticleH2_H3_P itemLists={itemLists2} />
      <div className="img-container-parefeuille">
        <Image
          src={Images.PareFeuille}
          alt={t("nextPages.pareFeuilles.imageBottomAlt")}
        />
      </div>
      <CarteForm />
      <Footer />
    </div>
  );
}

export default Parefeuilles;
