import imgAccueilGestion from "../public/img/gouttieres-entretenues-par-les-entretiens-grondin.jpg";
import imgConclusion from "../public/img/nettoyage-gouttiere-la-prairie-apres.jpg";
import imgMaison from "../public/img/maison-qui-on-fait-appel-a-gouttiere-rive-sud.jpg";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useNextI18n } from "../src/i18n/next-i18n-context";

const Header = dynamic(() => import("../component/Header"));
const Footer = dynamic(() => import("../component/Footer"));
const AccueilArticle = dynamic(() => import("../component/AccueilArticle"));
const TexteArticleH2 = dynamic(() => import("../component/TexteArticleH2_P"));
const ParagrapheArticle = dynamic(
  () => import("../component/ParagrapheArticle"),
);
const ListeArticleH3 = dynamic(() => import("../component/ListeArticleH3"));

function Gestion() {
  const { t, get } = useNextI18n();

  const content = get("nextPages.gestion.content", []);
  const content1 = get("nextPages.gestion.content1", []);
  const content2 = get("nextPages.gestion.content2", []);
  const textConclusion = get("nextPages.gestion.textConclusion", []);
  const itemList = get("nextPages.gestion.itemList", []);

  return (
    <div>
      <Head>
        <title key="title">{t("nextPages.gestion.headTitle")}</title>
        <link
          rel="canonical"
          href="https://entretiensgouttieresrivesud.ca/gestion-de-vos-gouttieres"
          key="canonical"
        />
        <meta
          name="description"
          content={t("nextPages.gestion.headDescription")}
          key="description"
        />
      </Head>
      <Header />
      <section id="accueil-gestion">
        <AccueilArticle
          titre={t("nextPages.gestion.accueilTitle")}
          soustitre={t("nextPages.gestion.accueilSubtitle")}
          imgsrc={imgAccueilGestion}
          alt={t("nextPages.gestion.accueilAlt")}
        />

        <TexteArticleH2 titresEtTextesH2={content} />
        <ParagrapheArticle texte={content1} />
        <div className="flex-center">
          <Image
            src={imgMaison}
            alt={t("nextPages.gestion.middleImageAlt")}
            className="img-full"
          />
        </div>

        <TexteArticleH2 titresEtTextesH2={content2} />

        <div className="title-list-img-frame">
          <div className="title-list-container">
            <TexteArticleH2 titresEtTextesH2={textConclusion} />
            <ListeArticleH3
              titre={t("nextPages.gestion.moreInfoTitle")}
              listLinkItems={itemList}
              isLink={true}
            />
            <p className="text-conclusion">
              {t("nextPages.gestion.helpStart")}{" "}
              <a href="https://entretiensgouttieresrivesud.ca/contactez-nous">
                {t("nextPages.gestion.helpContactLabel")}
              </a>
              {t("nextPages.gestion.helpMiddle")}{" "}
              <a href="https://entretiensgouttieresrivesud.ca/nos-services">
                {t("nextPages.gestion.helpServicesLabel")}
              </a>
              {t("nextPages.gestion.helpEnd")}
            </p>
          </div>
          <div className="img-container">
            <Image
              src={imgConclusion}
              alt={t("nextPages.gestion.finalImageAlt")}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Gestion;
