import React from "react";
import dynamic from "next/dynamic";
import Images from "../public/img/Images";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import { getLocalizedPath } from "../src/i18n/next-routes";
import SeoHead from "../component/SeoHead";

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
  const { t, get, lang } = useNextI18n();
  const siteUrl = "https://entretiensgouttieresrivesud.ca";
  const isEnglish = lang === "en";
  const frPath = getLocalizedPath(
    "fr-CA",
    "/les-differents-types-de-gouttieres",
  );
  const enPath = getLocalizedPath("en", "/les-differents-types-de-gouttieres");
  const canonical = `${siteUrl}${isEnglish ? enPath : frPath}`;
  const ogLocale = isEnglish ? "en_CA" : "fr_CA";

  const itemsList = get("nextPages.types.itemsList", []);

  return (
    <div>
      <SeoHead
        title={t("nextPages.types.headTitle")}
        description={t("nextPages.types.headDescription")}
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
