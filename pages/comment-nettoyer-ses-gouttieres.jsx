import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Images from "../public/img/Images";
import { useNextI18n } from "../src/i18n/next-i18n-context";

const Header = dynamic(() => import("../component/Header"));
const AccueilArticle = dynamic(() => import("../component/AccueilArticle"));
const ListeArticleH2_H3_P = dynamic(
  () => import("../component/ListeArticleH2_H3_P"),
);
const NumBar = dynamic(() => import("../component/NumBar"));
const BoxTxtTitleIn = dynamic(() => import("../component/BoxTxt_TitleIn"));
const H2PImgF = dynamic(() => import("../component/H2-P-ImgF"));
const Footer = dynamic(() => import("../component/Footer"));

function Comment() {
  const { t, get } = useNextI18n();

  const itemLists = get("nextPages.comment.risksItems", []);
  const itemLists2 = get("nextPages.comment.stepsItems", []);

  return (
    <div>
      <Head>
        <title key="title">{t("nextPages.comment.headTitle")}</title>
        <link
          rel="canonical"
          href="https://entretiensgouttieresrivesud.ca/comment-nettoyer-ses-gouttieres"
          key="canonical"
        />
        <meta
          name="description"
          content={t("nextPages.comment.headDescription")}
          key="description"
        />
      </Head>
      <Header />
      <AccueilArticle
        titre={t("nextPages.comment.accueilTitle")}
        soustitre={t("nextPages.comment.accueilSubtitle")}
        imgsrc={Images.MaisonGouttiere3}
        alt={t("nextPages.comment.accueilAlt")}
      />
      <ListeArticleH2_H3_P
        titreh2={t("nextPages.comment.risksTitle")}
        itemLists={itemLists}
      />
      <NumBar />
      <section id="comment__H2_p_imgf">
        <H2PImgF
          title={t("nextPages.comment.expertTitle")}
          texts={get("nextPages.comment.expertTexts", [])}
        />
      </section>
      <BoxTxtTitleIn
        color="L"
        title={t("nextPages.comment.diyTitle")}
        texts={get("nextPages.comment.diyTexts", [])}
        detail="F"
        className="boxTxtIn_L"
      />
      <ListeArticleH2_H3_P
        titreh2={t("nextPages.comment.stepsTitle")}
        itemLists={itemLists2}
      />
      <BoxTxtTitleIn
        color="L"
        title={t("nextPages.comment.noteTitle")}
        texts={get("nextPages.comment.noteTexts", [])}
        detail="F"
        className="boxTxtIn_L"
      />
      <Footer />
    </div>
  );
}
export default Comment;
