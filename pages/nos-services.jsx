import React from "react";
import dynamic from "next/dynamic";
import MaisonGouttiere4 from "../public/img/maison-dans-la-foret-de-la-region-de-la-rive-sud-avec-des-feuilles-qui-tombent-dans-les-gouttieres.jpg";
import Image from "next/image";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import { getLocalizedPath } from "../src/i18n/next-routes";
import SeoHead from "../component/SeoHead";

const Header = dynamic(() => import("../component/Header"));
const TopMainPage = dynamic(() => import("../component/TopMainPage"));
const BoxTxt = dynamic(() => import("../component/BoxTxt"));
const BorderTitle = dynamic(() => import("../component/BorderTitle"));
const NumBar = dynamic(() => import("../component/NumBar"));
const H2PImgF = dynamic(() => import("../component/H2-P-ImgF"));
const CarteForm = dynamic(() => import("../component/Carte_Form"));
const Footer = dynamic(() => import("../component/Footer"));

const Index = () => {
  const { t, get, lang } = useNextI18n();
  const siteUrl = "https://entretiensgouttieresrivesud.ca";
  const isEnglish = lang === "en";
  const frPath = getLocalizedPath("fr-CA", "/nos-services");
  const enPath = getLocalizedPath("en", "/nos-services");
  const canonical = `${siteUrl}${isEnglish ? enPath : frPath}`;
  const ogLocale = isEnglish ? "en_CA" : "fr_CA";

  return (
    <div id="P1">
      <SeoHead
        title={t("nextPages.services.headTitle")}
        description={t("nextPages.services.headDescription")}
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
      <main>
        <TopMainPage
          title={t("nextPages.services.topTitle")}
          text={t("nextPages.services.topText")}
        />
        <BoxTxt
          color="L"
          title={t("nextPages.services.offersTitle")}
          texts={get("nextPages.services.offersTexts", [])}
          className="boxTxt_L"
          detail="F"
        />
        <section id="service__EntretienG">
          <H2PImgF
            title={t("nextPages.services.maintenanceTitle")}
            texts={get("nextPages.services.maintenanceTexts", [])}
          />
        </section>
        <section className="margin">
          <BorderTitle
            title={t("nextPages.services.guardTitle")}
            text={t("nextPages.services.guardText")}
            detail="T"
            link="/tout-savoir-sur-les-pare-feuilles/"
          />
        </section>
        <NumBar />
        <section className="margin">
          <BorderTitle
            title={t("nextPages.services.subscriptionTitle")}
            text={t("nextPages.services.subscriptionText")}
            detail="F"
          />
        </section>
        <div className="img-container-parefeuille">
          <Image
            src={MaisonGouttiere4}
            alt={t("nextPages.services.imageAlt")}
          />
        </div>
        <CarteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
