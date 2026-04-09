import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useNextI18n } from "../src/i18n/next-i18n-context";

const Animation = dynamic(() => import("../component/Animation"));
const Header = dynamic(() => import("../component/Header"));
const TopMainPage = dynamic(() => import("../component/TopMainPage"));
const Soumission = dynamic(() => import("../component/Soumission"));
const BoxTxt = dynamic(() => import("../component/BoxTxt"));
const CarteForm = dynamic(() => import("../component/Carte_Form"));
const Footer = dynamic(() => import("../component/Footer"));

const CITY_LABELS = {
  longueuil: "Longueuil",
  brossard: "Brossard",
  boucherville: "Boucherville",
  "saint-bruno": "Saint-Bruno-de-Montarville",
  candiac: "Candiac",
  "saint-lambert": "Saint-Lambert",
  "la-prairie": "La Prairie",
  chambly: "Chambly",
  "sainte-julie": "Sainte-Julie",
  beloeil: "Beloeil",
};

function CityPage({ citySlug }) {
  const router = useRouter();
  const { t, get } = useNextI18n();

  const cityName = CITY_LABELS[citySlug] || citySlug;
  const cityData = get(`cities.${citySlug}`, null);
  const title = cityData?.meta_title || t("seo.city.title", { city: cityName });
  const description =
    cityData?.meta_description || t("seo.city.description", { city: cityName });

  const siteUrl = "https://entretiensgouttieresrivesud.ca";
  const locale = router.locale || "fr-CA";
  const currentPath = `/${citySlug}`;
  const canonical = `${siteUrl}${locale === "en" ? `/en${currentPath}` : currentPath}`;
  const frAlt = `${siteUrl}${currentPath}`;
  const enAlt = `${siteUrl}/en${currentPath}`;

  const serviceBullets = get("page.city.serviceBullets", [
    "Nettoyage résidentiel",
    "Inspection préventive",
    "Installation de pare-feuilles",
  ]);

  const faqQuestion =
    cityData?.faq_q1 ||
    (locale === "en"
      ? "Local frequently asked question"
      : "Question fréquente locale");
  const faqAnswer =
    cityData?.faq_a1 || t("page.city.sectionText", { city: cityName });
  const detailedProcessTitle =
    cityData?.detailed_process_title ||
    (locale === "en"
      ? `Our gutter cleaning process in ${cityName}`
      : `Notre méthode de nettoyage de gouttières à ${cityName}`);
  const detailedProcess =
    cityData?.detailed_process ||
    t("page.city.sectionText", { city: cityName });

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta name="description" content={description} key="description" />
        <link rel="canonical" href={canonical} key="canonical" />
        <link
          rel="alternate"
          hrefLang="fr-CA"
          href={frAlt}
          key="hreflang-fr-ca"
        />
        <link rel="alternate" hrefLang="en" href={enAlt} key="hreflang-en" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={frAlt}
          key="hreflang-x-default"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={title} key="og:title" />
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
        <meta property="og:url" content={canonical} key="og:url" />
      </Head>

      <Animation />
      <Header />
      <main>
        <TopMainPage
          title={cityData?.h1 || t("page.city.heading", { city: cityName })}
          text={
            cityData?.intro_paragraph || t("page.city.lead", { city: cityName })
          }
        />

        <Soumission />

        <section id="section__services">
          <div className="left">
            <h2 className="hidden_fade-bottom">
              {cityData?.service_list_title ||
                t("page.city.sectionTitle", { city: cityName })}
            </h2>
            <ul>
              {serviceBullets.map((item) => (
                <li className="hidden_fade-right" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="section__BoxTxt">
          <BoxTxt
            color="G"
            title={locale === "en" ? "Local expertise" : "Expertise locale"}
            texts={[
              cityData?.local_expertise ||
                t("page.city.sectionText", { city: cityName }),
            ]}
            detail="F"
            className="boxTxt_L"
          />
        </section>

        <section id="section__detailed-process">
          <div className="box__Container">
            <h2 className="hidden_fade-right">{detailedProcessTitle}</h2>
            <div className="boxTxt__Container">
              <p className="hidden_fade-bottom">{detailedProcess}</p>
            </div>
          </div>
        </section>

        <div className="faq-wrapper">
          <div className="accordion">
            <div className="faq-items">
              <div className="faq-title">
                <h2>{faqQuestion}</h2>
                <span>-</span>
              </div>
              <div className="content-faq show">
                <p>{faqAnswer}</p>
              </div>
            </div>
          </div>
        </div>

        <CarteForm />
      </main>
      <Footer />
    </>
  );
}

export function getServerSideProps({ params }) {
  const citySlug = (params?.city || "").toLowerCase();

  if (!Object.prototype.hasOwnProperty.call(CITY_LABELS, citySlug)) {
    return { notFound: true };
  }

  return {
    props: {
      citySlug,
    },
  };
}

export default CityPage;
