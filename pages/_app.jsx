import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getI18n, resolveLang } from "../src/i18n/next-i18n";
import { NextI18nProvider } from "../src/i18n/next-i18n-context";
import "../src/App.css";
import "../src/CSS/Comment.css";
import "../src/CSS/ContactUs.css";
import "../src/CSS/FAQ.css";
import "../src/CSS/Gestion.css";
import "../src/CSS/Informations.css";
import "../src/CSS/Quand.css";
import "../src/CSS/Realisation.css";
import "../src/CSS/Services.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const siteUrl = "https://entretiensgouttieresrivesud.ca";
  const rawPath = router.asPath.split("?")[0].split("#")[0];
  const currentPath =
    rawPath === "/en" ? "/" : rawPath.replace(/^\/en(?=\/|$)/, "") || "/";
  const locale =
    pageProps?.locale ||
    (rawPath === "/en" || rawPath.startsWith("/en/") ? "en" : "fr-CA");
  const lang = resolveLang(locale);
  const { t } = getI18n(lang);
  const isEnglishPage = lang === "en";
  const localizedPath = `${isEnglishPage ? "/en" : ""}${currentPath === "/" ? "" : currentPath}`;
  const canonicalUrl = `${siteUrl}${localizedPath}`;
  const routeAlternates = {
    "/nos-services": {
      fr: "/nos-services",
      en: "/services",
    },
    "/services": {
      fr: "/nos-services",
      en: "/services",
    },
    "/contactez-nous": {
      fr: "/contactez-nous",
      en: "/contact",
    },
    "/contact": {
      fr: "/contactez-nous",
      en: "/contact",
    },
    "/faq": {
      fr: "/faq",
      en: "/faq",
    },
    "/realisation": {
      fr: "/realisation",
      en: "/projects",
    },
    "/projects": {
      fr: "/realisation",
      en: "/projects",
    },
    "/pourquoi-entretenir-ses-gouttieres": {
      fr: "/pourquoi-entretenir-ses-gouttieres",
      en: "/why-maintain-gutters",
    },
    "/why-maintain-gutters": {
      fr: "/pourquoi-entretenir-ses-gouttieres",
      en: "/why-maintain-gutters",
    },
    "/quand-nettoyer-ses-gouttieres": {
      fr: "/quand-nettoyer-ses-gouttieres",
      en: "/when-to-clean-gutters",
    },
    "/when-to-clean-gutters": {
      fr: "/quand-nettoyer-ses-gouttieres",
      en: "/when-to-clean-gutters",
    },
    "/comment-nettoyer-ses-gouttieres": {
      fr: "/comment-nettoyer-ses-gouttieres",
      en: "/how-to-clean-gutters",
    },
    "/how-to-clean-gutters": {
      fr: "/comment-nettoyer-ses-gouttieres",
      en: "/how-to-clean-gutters",
    },
    "/gestion-de-vos-gouttieres": {
      fr: "/gestion-de-vos-gouttieres",
      en: "/gutter-maintenance-guide",
    },
    "/gutter-maintenance-guide": {
      fr: "/gestion-de-vos-gouttieres",
      en: "/gutter-maintenance-guide",
    },
    "/les-differents-types-de-gouttieres": {
      fr: "/les-differents-types-de-gouttieres",
      en: "/gutter-types",
    },
    "/gutter-types": {
      fr: "/les-differents-types-de-gouttieres",
      en: "/gutter-types",
    },
  };
  const alternatePair = routeAlternates[currentPath] || {
    fr: currentPath,
    en: currentPath,
  };
  const frAltUrl = `${siteUrl}${alternatePair.fr === "/" ? "" : alternatePair.fr}`;
  const enAltUrl = `${siteUrl}/en${alternatePair.en === "/" ? "" : alternatePair.en}`;
  const seoByPath = {
    "/": {
      titleKey: "nextPages.index.headTitle",
      descriptionKey: "nextPages.index.headDescription",
    },
    "/nos-services": {
      titleKey: "nextPages.services.headTitle",
      descriptionKey: "nextPages.services.headDescription",
    },
    "/services": {
      titleKey: "nextPages.services.headTitle",
      descriptionKey: "nextPages.services.headDescription",
    },
    "/contactez-nous": {
      titleKey: "nextPages.contact.headTitle",
      descriptionKey: "nextPages.contact.headDescription",
    },
    "/contact": {
      titleKey: "nextPages.contact.headTitle",
      descriptionKey: "nextPages.contact.headDescription",
    },
    "/faq": {
      titleKey: "nextPages.faq.headTitle",
      descriptionKey: "nextPages.faq.headDescription",
    },
    "/realisation": {
      titleKey: "nextPages.realisation.headTitle",
      descriptionKey: "nextPages.realisation.headDescription",
    },
    "/projects": {
      titleKey: "nextPages.realisation.headTitle",
      descriptionKey: "nextPages.realisation.headDescription",
    },
    "/pourquoi-entretenir-ses-gouttieres": {
      titleKey: "nextPages.pourquoi.headTitle",
      descriptionKey: "nextPages.pourquoi.headDescription",
    },
    "/why-maintain-gutters": {
      titleKey: "nextPages.pourquoi.headTitle",
      descriptionKey: "nextPages.pourquoi.headDescription",
    },
    "/quand-nettoyer-ses-gouttieres": {
      titleKey: "nextPages.quand.headTitle",
      descriptionKey: "nextPages.quand.headDescription",
    },
    "/when-to-clean-gutters": {
      titleKey: "nextPages.quand.headTitle",
      descriptionKey: "nextPages.quand.headDescription",
    },
    "/comment-nettoyer-ses-gouttieres": {
      titleKey: "nextPages.comment.headTitle",
      descriptionKey: "nextPages.comment.headDescription",
    },
    "/how-to-clean-gutters": {
      titleKey: "nextPages.comment.headTitle",
      descriptionKey: "nextPages.comment.headDescription",
    },
    "/gestion-de-vos-gouttieres": {
      titleKey: "nextPages.gestion.headTitle",
      descriptionKey: "nextPages.gestion.headDescription",
    },
    "/gutter-maintenance-guide": {
      titleKey: "nextPages.gestion.headTitle",
      descriptionKey: "nextPages.gestion.headDescription",
    },
    "/les-differents-types-de-gouttieres": {
      titleKey: "nextPages.types.headTitle",
      descriptionKey: "nextPages.types.headDescription",
    },
    "/gutter-types": {
      titleKey: "nextPages.types.headTitle",
      descriptionKey: "nextPages.types.headDescription",
    },
    "/tout-savoir-sur-les-gouttieres": {
      titleKey: "nextPages.infoGouttieres.headTitle",
      descriptionKey: "nextPages.infoGouttieres.headDescription",
    },
    "/tout-savoir-sur-les-pare-feuilles": {
      titleKey: "nextPages.pareFeuilles.headTitle",
      descriptionKey: "nextPages.pareFeuilles.headDescription",
    },
  };
  const seoEntry = seoByPath[currentPath] || seoByPath["/"];
  const seo = {
    title: t(seoEntry.titleKey),
    description: t(seoEntry.descriptionKey),
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Les Entretiens Grondin",
    image: `${siteUrl}/logo.webp`,
    url: siteUrl,
    telephone: "+1-819-237-9813",
    areaServed: ["Rive-Sud", "Longueuil", "Brossard", "Candiac", "Chambly"],
    address: {
      "@type": "PostalAddress",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
          key="viewport"
        />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
          key="robots"
        />
        <meta name="author" content="Les Entretiens Grondin" key="author" />
        <meta name="theme-color" content="#1f4b38" key="theme-color" />
        <meta
          property="og:site_name"
          content="Les Entretiens Grondin"
          key="og:site_name"
        />
        <meta
          property="og:locale"
          content={isEnglishPage ? "en_CA" : "fr_CA"}
          key="og:locale"
        />
        <meta
          property="og:locale:alternate"
          content={isEnglishPage ? "fr_CA" : "en_CA"}
          key="og:locale:alternate"
        />
        <meta property="og:type" content="website" key="og:type" />
        <title key="title">{seo.title}</title>
        <meta name="description" content={seo.description} key="description" />
        <meta property="og:url" content={canonicalUrl} key="og:url" />
        <meta property="og:title" content={seo.title} key="og:title" />
        <meta
          property="og:description"
          content={seo.description}
          key="og:description"
        />
        <meta
          property="og:image"
          content={`${siteUrl}/logo.webp`}
          key="og:image"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        <meta name="twitter:title" content={seo.title} key="twitter:title" />
        <meta
          name="twitter:description"
          content={seo.description}
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content={`${siteUrl}/logo.webp`}
          key="twitter:image"
        />
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        <link
          rel="alternate"
          hrefLang="fr-CA"
          href={frAltUrl}
          key="hreflang-fr-ca"
        />
        <link rel="alternate" hrefLang="en" href={enAltUrl} key="hreflang-en" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={frAltUrl}
          key="hreflang-x-default"
        />
        <link rel="icon" type="image/webp" href="/logo.webp" key="icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo.webp"
          key="apple-touch-icon"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          key="ld-local-business"
        />
      </Head>
      <NextI18nProvider locale={locale}>
        <Component {...pageProps} />
      </NextI18nProvider>
    </>
  );
};

export default MyApp;
