import { useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useNextI18n } from "../src/i18n/next-i18n-context";

const Header = dynamic(() => import("../component/Header"));
const TopMainPage = dynamic(() => import("../component/TopMainPage"));
const NumBar = dynamic(() => import("../component/NumBar"));
const CarteForm = dynamic(() => import("../component/Carte_Form"));
const Footer = dynamic(() => import("../component/Footer"));

function FAQ() {
  const { t, get } = useNextI18n();
  const data = get("nextPages.faq.items", []);
  const conclusion = get("nextPages.faq.conclusion", []);

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div>
      <Head>
        <title key="title">{t("nextPages.faq.headTitle")}</title>
        <link
          rel="canonical"
          href="https://entretiensgouttieresrivesud.ca/FAQ"
          key="canonical"
        />
        <meta
          name="description"
          content={t("nextPages.faq.headDescription")}
          key="description"
        />
      </Head>
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
