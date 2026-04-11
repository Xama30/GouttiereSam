import React from "react";
import dynamic from "next/dynamic";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faPhone,
  faMailReply,
} from "@fortawesome/free-solid-svg-icons";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import { getLocalizedPath } from "../src/i18n/next-routes";
import SeoHead from "../component/SeoHead";

const Header = dynamic(() => import("../component/Header"));
const Icon_H3_P = dynamic(() => import("../component/Icon_H3_P"));
const BorderTitle = dynamic(() => import("../component/BorderTitle"));
const Footer = dynamic(() => import("../component/Footer"));
const Form = dynamic(() => import("../component/Form"));

library.add(faClock, faPhone, faMailReply);

function ContactUs() {
  const { t, lang } = useNextI18n();
  const siteUrl = "https://entretiensgouttieresrivesud.ca";
  const isEnglish = lang === "en";
  const frPath = getLocalizedPath("fr-CA", "/contactez-nous");
  const enPath = getLocalizedPath("en", "/contactez-nous");
  const canonical = `${siteUrl}${isEnglish ? enPath : frPath}`;
  const ogLocale = isEnglish ? "en_CA" : "fr_CA";

  return (
    <div>
      <SeoHead
        title={t("nextPages.contact.headTitle")}
        description={t("nextPages.contact.headDescription")}
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
      <section id="#Contactez-nous" className="Top__ContactUs">
        <h1>{t("nextPages.contact.title")}</h1>
      </section>
      <section id="Icon_ContactUs">
        <Icon_H3_P
          icon={faClock}
          title={t("nextPages.contact.openHours")}
          text={t("nextPages.contact.openWeek")}
          text2={t("nextPages.contact.openWeekend")}
        />
        <Icon_H3_P
          icon={faPhone}
          title={t("nextPages.contact.phone")}
          tel="1-819-237-9813"
        />
        <Icon_H3_P
          icon={faMailReply}
          title={t("nextPages.contact.email")}
          email="entretiensgrondin@hotmail.com"
        />
      </section>
      <section id="form">
        <h2>{t("nextPages.contact.formTitle")}</h2>
        <h3>{t("nextPages.contact.formSubtitle")}</h3>
        <Form />
      </section>
      <section>
        <div className="title-bar">{t("nextPages.contact.whyTitle")}</div>
        <p className="p-CU">{t("nextPages.contact.intro")}</p>
        <BorderTitle
          title={t("nextPages.contact.bt1Title")}
          text={t("nextPages.contact.bt1Text")}
          className="CU-BT"
          detail="F"
        />
        <BorderTitle
          title={t("nextPages.contact.bt2Title")}
          text={t("nextPages.contact.bt2Text")}
          className="CU-BT"
          detail="F"
        />
        <BorderTitle
          title={t("nextPages.contact.bt3Title")}
          text={t("nextPages.contact.bt3Text")}
          className="CU-BT"
          detail="F"
        />
        <p className="p-CU p-CU2">{t("nextPages.contact.conclusion")}</p>
      </section>
      <Footer />
    </div>
  );
}
export default ContactUs;
