import React from "react";
import dynamic from "next/dynamic";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import SeoHead from "../component/SeoHead";
import frLocale from "../src/i18n/locales/fr.json";

const Animation = dynamic(() => import("../component/Animation"));
const Header = dynamic(() => import("../component/Header"));
const TopMainPage = dynamic(() => import("../component/TopMainPage"));
const Soumission = dynamic(() => import("../component/Soumission"));
const BoxTxt = dynamic(() => import("../component/BoxTxt"));
const CarteForm = dynamic(() => import("../component/Carte_Form"));
const Footer = dynamic(() => import("../component/Footer"));

const CITY_SLUGS = Object.keys(frLocale?.cities || {});

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

function CityPage({ citySlug, cityData: cityDataFromProps }) {
  const { t, get, lang } = useNextI18n();

  const cityName = CITY_LABELS[citySlug] || citySlug;
  const cityData = get(`cities.${citySlug}`, cityDataFromProps || null);
  const title = cityData?.meta_title || t("seo.city.title", { city: cityName });
  const description =
    cityData?.meta_description || t("seo.city.description", { city: cityName });

  const siteUrl = "https://entretiensgouttieresrivesud.ca";
  const isEnglish = lang === "en";
  const currentPath = `/${citySlug}`;
  const canonical = `${siteUrl}${isEnglish ? `/en${currentPath}` : currentPath}`;
  const frAlt = `${siteUrl}${currentPath}`;
  const enAlt = `${siteUrl}/en${currentPath}`;
  const ogLocale = isEnglish ? "en_CA" : "fr_CA";

  const serviceBullets = get("page.city.serviceBullets", [
    "Nettoyage résidentiel",
    "Inspection préventive",
    "Installation de pare-feuilles",
  ]);

  const faqQuestion =
    cityData?.faq_q1 ||
    (lang === "en"
      ? "Local frequently asked question"
      : "Question fréquente locale");
  const faqAnswer =
    cityData?.faq_a1 || t("page.city.sectionText", { city: cityName });
  const detailedProcessTitle =
    cityData?.detailed_process_title ||
    (lang === "en"
      ? `Our gutter cleaning process in ${cityName}`
      : `Notre méthode de nettoyage de gouttières à ${cityName}`);
  const detailedProcess =
    cityData?.detailed_process ||
    t("page.city.sectionText", { city: cityName });

  return (
    <>
      <SeoHead
        title={title}
        description={description}
        url={canonical}
        image="/logo.webp"
        locale={ogLocale}
        alternates={[
          { hrefLang: "fr-CA", href: frAlt },
          { hrefLang: "en-CA", href: enAlt },
          { hrefLang: "x-default", href: frAlt },
        ]}
      />

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
            title={lang === "en" ? "Local expertise" : "Expertise locale"}
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

export function getStaticPaths() {
  const paths = CITY_SLUGS.map((city) => ({
    params: { city },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const citySlug = (params?.city || "").toLowerCase();
  const cityData = frLocale?.cities?.[citySlug] || null;

  if (!cityData) {
    return { notFound: true };
  }

  return {
    props: {
      citySlug,
      cityData,
      currentCity: citySlug,
    },
  };
}

export default CityPage;
