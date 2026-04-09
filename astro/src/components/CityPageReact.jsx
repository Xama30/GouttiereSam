import React, { useState } from "react";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import Soumission from "../../../component/Soumission";
import TopMainPage from "../../../component/TopMainPage";
import CarteForm from "../../../component/Carte_Form";
import Animation from "../../../component/Animation";
import { NextI18nProvider } from "../../../src/i18n/next-i18n-context";

export default function CityPageReact({
  locale,
  cityData,
  cityName,
  serviceBullets,
  fallbackSectionTitle,
  fallbackSectionText,
  fallbackFaqTitle,
  faqSectionTitle,
  fallbackFaqText,
  localExpertiseHeading,
}) {
  const isEnglish = locale === "en";
  const heroTitle =
    cityData?.h1 ||
    (isEnglish
      ? `Gutter cleaning in ${cityName}`
      : `Nettoyage de gouttières à ${cityName}`);
  const heroIntro = cityData?.intro_paragraph || fallbackSectionText;
  const serviceTitle = cityData?.service_list_title || fallbackSectionTitle;
  const localExpertise = cityData?.local_expertise || fallbackSectionText;
  const detailedProcessTitle =
    cityData?.detailed_process_title ||
    (isEnglish
      ? `Our gutter cleaning process in ${cityName}`
      : `Notre méthode de nettoyage de gouttières à ${cityName}`);
  const detailedProcess = cityData?.detailed_process || fallbackSectionText;
  const faqQuestion = cityData?.faq_q1 || fallbackFaqTitle;
  const faqAnswer = cityData?.faq_a1 || fallbackFaqText;
  const [isFaqOpen, setIsFaqOpen] = useState(true);

  return (
    <NextI18nProvider locale={locale}>
      <div>
        <Animation />
        <Header />
        <main>
          <TopMainPage title={heroTitle} text={heroIntro} />
          <Soumission />

          <section id="section__services">
            <div className="left">
              <h2 className="hidden_fade-bottom">{serviceTitle}</h2>
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
            <div className="box__Container">
              <h2 className="hidden_fade-right">{localExpertiseHeading}</h2>
              <div
                className="boxTxt__Container"
                style={{ backgroundColor: "#1D593B" }}
              >
                <p className="hidden_fade-bottom" style={{ color: "white" }}>
                  {localExpertise}
                </p>
              </div>
            </div>
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
            <h2>{faqSectionTitle}</h2>
            <div className="accordion">
              <div className="faq-items">
                <div
                  className="faq-title"
                  onClick={() => setIsFaqOpen((prev) => !prev)}
                >
                  <h3>{faqQuestion}</h3>
                  <span>{isFaqOpen ? "-" : "+"}</span>
                </div>
                <div className={isFaqOpen ? "content-faq show" : "content-faq"}>
                  <p>{faqAnswer}</p>
                </div>
              </div>
            </div>
          </div>

          <CarteForm />
        </main>
        <Footer />
      </div>
    </NextI18nProvider>
  );
}
