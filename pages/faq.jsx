import { useState } from "react";
import React from "react";
import dynamic from "next/dynamic";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import { getLocalizedPath } from "../src/i18n/next-routes";
import SeoHead from "../component/SeoHead";

const Header = dynamic(() => import("../component/Header"));
const TopMainPage = dynamic(() => import("../component/TopMainPage"));
const NumBar = dynamic(() => import("../component/NumBar"));
const CarteForm = dynamic(() => import("../component/Carte_Form"));
const Footer = dynamic(() => import("../component/Footer"));

function FAQ() {
  const { t, get, lang } = useNextI18n();
  const data = get("nextPages.faq.items", []);
  const conclusion = get("nextPages.faq.conclusion", []);
  const siteUrl = "https://entretiensgouttieresrivesud.ca";
  const isEnglish = lang === "en";
  const frPath = getLocalizedPath("fr-CA", "/faq");
  const enPath = getLocalizedPath("en", "/faq");
  const canonical = `${siteUrl}${isEnglish ? enPath : frPath}`;
  const ogLocale = isEnglish ? "en_CA" : "fr_CA";

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div>
      <SeoHead
        title={t("nextPages.faq.headTitle")}
        description={t("nextPages.faq.headDescription")}
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
      <TopMainPage
        title={t("nextPages.faq.topTitle")}
        text={t("nextPages.faq.topText")}
      />
      <div className="faq-wrapper">
        <div className="accordion">
          {data.map((items, i) => (
            <div className="faq-items" key={`${items.question}-${i}`}>
              <div className="faq-title" onClick={() => toggle(i)}>
                <h2>{items.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div
                className={selected === i ? "content-faq show" : "content-faq"}
              >
                <p>{items.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="faq-numbar">
        <NumBar />
      </div>
      <div className="faq-conclusion">
        {conclusion.map((paragraph, index) => (
          <p key={`${paragraph}-${index}`}>{paragraph}</p>
        ))}
      </div>
      <CarteForm />
      <Footer />
    </div>
  );
}
export default FAQ;
