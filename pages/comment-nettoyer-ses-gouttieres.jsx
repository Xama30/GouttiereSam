import React from "react";
import dynamic from "next/dynamic";
import Images from "../public/img/Images";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import { getLocalizedPath } from "../src/i18n/next-routes";
import SeoHead from "../component/SeoHead";

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
  const { t, get, lang } = useNextI18n();
  const siteUrl = "https://entretiensgouttieresrivesud.ca";
  const isEnglish = lang === "en";
  const frPath = getLocalizedPath("fr-CA", "/comment-nettoyer-ses-gouttieres");
  const enPath = getLocalizedPath("en", "/comment-nettoyer-ses-gouttieres");
  const canonical = `${siteUrl}${isEnglish ? enPath : frPath}`;
  const ogLocale = isEnglish ? "en_CA" : "fr_CA";

  const itemLists = get("nextPages.comment.risksItems", []);
  const itemLists2 = get("nextPages.comment.stepsItems", []);

  return (
    <div>
      <SeoHead
        title={t("nextPages.comment.headTitle")}
        description={t("nextPages.comment.headDescription")}
        url={canonical}
        image="/logo.webp"
        locale={ogLocale}
        alternates={[
          { hrefLang: "fr-CA", href: `${siteUrl}${frPath}` },
          { hrefLang: "en-CA", href: `${siteUrl}${enPath}` },
          { hrefLang: "x-default", href: `${siteUrl}${frPath}` },
        ]}
      />
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
