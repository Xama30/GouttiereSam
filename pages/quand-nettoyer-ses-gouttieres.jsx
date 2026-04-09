import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import Images from "../public/img/Images";
import imgGouttieresPleines from "../public/img/professionnel-de-goutiere-rive-sud-qui-retire-les-feuilles-des-gouttieres.png";
import { useNextI18n } from "../src/i18n/next-i18n-context";

const Header = dynamic(() => import("../component/Header"));
const AccueilArticle = dynamic(() => import("../component/AccueilArticle"));
const BoxTxtTitleIn = dynamic(() => import("../component/BoxTxt_TitleIn"));
const BorderTitle = dynamic(() => import("../component/BorderTitle"));
const NumBar = dynamic(() => import("../component/NumBar"));
const TexteArticleH2 = dynamic(() => import("../component/TexteArticleH2_P"));
const ListeArticleH3 = dynamic(() => import("../component/ListeArticleH3"));
const ListeArticleH2_H3_P = dynamic(
  () => import("../component/ListeArticleH2_H3_P"),
);
const ParagrapheArticle = dynamic(
  () => import("../component/ParagrapheArticle"),
);
const Footer = dynamic(() => import("../component/Footer"));
const Soumission = dynamic(() => import("../component/Soumission"));

function Quand() {
  const { t, get } = useNextI18n();

  const titresEtTextesH2 = get("nextPages.quand.titresEtTextesH2", []);
  const titresEtTextesH22 = get("nextPages.quand.titresEtTextesH22", []);
  const itemList = get("nextPages.quand.itemList", []);
  const itemLists = get("nextPages.quand.itemLists", []);
  const texte = get("nextPages.quand.texte", []);

  return (
    <div>
      <Head>
        <title key="title">{t("nextPages.quand.headTitle")}</title>
        <link
          rel="canonical"
          href="https://entretiensgouttieresrivesud.ca/quand-nettoyer-ses-gouttieres"
          key="canonical"
        />
        <meta
          name="description"
          content={t("nextPages.quand.headDescription")}
          key="description"
        />
      </Head>
      <Header />
      <AccueilArticle
        titre={t("nextPages.quand.accueilTitle")}
        soustitre={t("nextPages.quand.accueilSubtitle")}
        imgsrc={Images.carte2}
        alt={t("nextPages.quand.accueilAlt")}
      />

      <div className="title-list-img-frame">
        <div className="title-list-container">
          <TexteArticleH2 titresEtTextesH2={titresEtTextesH2} />
          <ListeArticleH3
            titre={t("nextPages.quand.signsTitle")}
            itemLists={itemList}
          />
        </div>
        <div className="img-container">
          <Image
            src={imgGouttieresPleines}
            alt={t("nextPages.quand.firstImageAlt")}
          />
        </div>
      </div>

      <BoxTxtTitleIn
        color="G"
        title={t("nextPages.quand.frequencyBoxTitle")}
        texts={get("nextPages.quand.frequencyBoxTexts", [])}
        detail="F"
      />

      <ListeArticleH2_H3_P
        titreh2={t("nextPages.quand.factorsTitle")}
        itemLists={itemLists}
      />

      <NumBar />

      <div className="imgBox--Article">
        <Image
          src={Images.GouttiereEau}
          alt={t("nextPages.quand.secondImageAlt")}
        />
      </div>

      <TexteArticleH2 titresEtTextesH2={titresEtTextesH22} />
      <ParagrapheArticle texte={texte} />

      <Soumission />

      <BorderTitle
        title={t("nextPages.quand.borderTitle")}
        text={t("nextPages.quand.borderText")}
        detail="T"
        link="/tout-savoir-sur-les-pare-feuilles"
        className="paddingBorderTitle"
      />

      <Footer />
    </div>
  );
}
export default Quand;
