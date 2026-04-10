import Images from "../public/img/Images";
import imgToiture from "../public/img/toiture-abime-et-la-gouttiere-pleines-de-debris.jpg";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import { getLocalizedPath } from "../src/i18n/next-routes";
import SeoHead from "../component/SeoHead";

const Header = dynamic(() => import("../component/Header"));
const AccueilArticle = dynamic(() => import("../component/AccueilArticle"));
const TexteArticleH2 = dynamic(() => import("../component/TexteArticleH2_P"));
const ParagrapheArticle = dynamic(
  () => import("../component/ParagrapheArticle"),
);
const NumBar = dynamic(() => import("../component/NumBar"));
const CarteForm = dynamic(() => import("../component/Carte_Form"));
const Footer = dynamic(() => import("../component/Footer"));

function Pourquoi() {
  const { t, get, lang } = useNextI18n();
  const siteUrl = "https://entretiensgouttieresrivesud.ca";
  const isEnglish = lang === "en";
  const frPath = getLocalizedPath(
    "fr-CA",
    "/pourquoi-entretenir-ses-gouttieres",
  );
  const enPath = getLocalizedPath("en", "/pourquoi-entretenir-ses-gouttieres");
  const canonical = `${siteUrl}${isEnglish ? enPath : frPath}`;
  const ogLocale = isEnglish ? "en_CA" : "fr_CA";

  const texte = get("nextPages.pourquoi.texte", []);
  const texte1 = get("nextPages.pourquoi.texte1", []);
  const texte2 = get("nextPages.pourquoi.texte2", []);
  const texteP = get("nextPages.pourquoi.texteP", []);
  const texte3 = get("nextPages.pourquoi.texte3", []);

  return (
    <div>
      <SeoHead
        title={t("nextPages.pourquoi.headTitle")}
        description={t("nextPages.pourquoi.headDescription")}
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
        titre={t("nextPages.pourquoi.accueilTitle")}
        soustitre={t("nextPages.pourquoi.accueilSubtitle")}
        imgsrc={Images.MaisonGouttiere2}
        alt={t("nextPages.pourquoi.accueilAlt")}
      />

      <TexteArticleH2 titresEtTextesH2={texte} />

      <div className="imgBox--Article">
        <Image
          src={Images.Pelouse}
          alt={t("nextPages.pourquoi.precipitationAlt")}
        />
      </div>

      <NumBar />

      <TexteArticleH2 titresEtTextesH2={texte1} />
      <div className="img-container-pourquoi">
        <Image src={imgToiture} alt={t("nextPages.pourquoi.roofAlt")} />
      </div>
      <ParagrapheArticle texte={texteP} />

      <TexteArticleH2 titresEtTextesH2={texte2} />

      <TexteArticleH2 titresEtTextesH2={texte3} />

      <CarteForm />
      <Footer />
    </div>
  );
}

export default Pourquoi;
