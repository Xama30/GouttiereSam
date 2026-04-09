import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Images from "../public/img/Images";
import { useNextI18n } from "../src/i18n/next-i18n-context";

const Header = dynamic(() => import("../component/Header"));
const AccueilArticle = dynamic(() => import("../component/AccueilArticle"));
const BoxTxtTitleIn = dynamic(() => import("../component/BoxTxt_TitleIn"));
const CarteForm = dynamic(() => import("../component/Carte_Form"));
const NumBar = dynamic(() => import("../component/NumBar"));
const ListeArticleH2_H3_P = dynamic(
  () => import("../component/ListeArticleH2_H3_P"),
);
const Footer = dynamic(() => import("../component/Footer"));
const Soumission = dynamic(() => import("../component/Soumission"));

function TypesGouttieres() {
  const { t, get } = useNextI18n();

  const itemsList = get("nextPages.types.itemsList", []);

  return (
    <div>
      <Head>
        <title key="title">{t("nextPages.types.headTitle")}</title>
        <link
          rel="canonical"
          href="https://entretiensgouttieresrivesud.ca/les-differents-types-de-gouttieres"
          key="canonical"
        />
        <meta
          name="description"
          content={t("nextPages.types.headDescription")}
          key="description"
        />
      </Head>
      <Header />
      <AccueilArticle
        titre={t("nextPages.types.accueilTitle")}
        soustitre={t("nextPages.types.accueilSubtitle")}
        imgsrc={Images.carte2}
        alt={t("nextPages.types.accueilAlt")}
      />
      <Soumission />
      <ListeArticleH2_H3_P
        titreh2={t("nextPages.types.sectionTitle")}
        itemLists={itemsList}
      />
      <NumBar />
      <BoxTxtTitleIn
        color="L"
        title={t("nextPages.types.conclusionTitle")}
        texts={get("nextPages.types.conclusionTexts", [])}
        detail="F"
      />
      <CarteForm />
      <Footer />
    </div>
  );
}

export default TypesGouttieres;
