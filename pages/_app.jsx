import React from "react";
import Head from "next/head";
import { resolveLang } from "../src/i18n/next-i18n";
import { NextI18nProvider } from "../src/i18n/next-i18n-context";
import frLocale from "../src/i18n/locales/fr.json";
import "../src/App.css";
import "../src/CSS/Comment.css";
import "../src/CSS/ContactUs.css";
import "../src/CSS/FAQ.css";
import "../src/CSS/Gestion.css";
import "../src/CSS/Informations.css";
import "../src/CSS/Quand.css";
import "../src/CSS/Realisation.css";
import "../src/CSS/Services.css";

const CITY_NAME_OVERRIDES = {
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

function citySlugToName(slug) {
  const normalizedSlug = String(slug || "")
    .trim()
    .toLowerCase();

  if (CITY_NAME_OVERRIDES[normalizedSlug]) {
    return CITY_NAME_OVERRIDES[normalizedSlug];
  }

  return normalizedSlug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function resolveCurrentCityName(currentCity, allCityNamesBySlug) {
  if (!currentCity) {
    return "";
  }

  const normalizedInput = String(currentCity).trim().toLowerCase();

  if (allCityNamesBySlug[normalizedInput]) {
    return allCityNamesBySlug[normalizedInput];
  }

  const fromKnownName = Object.values(allCityNamesBySlug).find(
    (cityName) => cityName.toLowerCase() === normalizedInput,
  );

  if (fromKnownName) {
    return fromKnownName;
  }

  return citySlugToName(normalizedInput.replace(/\s+/g, "-"));
}

const MyApp = ({ Component, pageProps }) => {
  const locale = pageProps?.locale || "fr-CA";
  const lang = resolveLang(locale);
  const isEnglishPage = lang === "en";
  const siteUrl = "https://entretiensgouttieresrivesud.ca";
  const allCityNamesBySlug = Object.fromEntries(
    Object.keys(frLocale?.cities || {}).map((citySlug) => [
      citySlug,
      citySlugToName(citySlug),
    ]),
  );
  const allCityNames = Object.values(allCityNamesBySlug);
  const currentCityName = resolveCurrentCityName(
    pageProps?.currentCity || pageProps?.citySlug,
    allCityNamesBySlug,
  );
  const areaServed = currentCityName
    ? [
        currentCityName,
        "Rive-Sud",
        ...allCityNames.filter((cityName) => cityName !== currentCityName),
      ]
    : ["Rive-Sud", ...allCityNames];
  const defaultTitle = isEnglishPage
    ? "South Shore Gutter Cleaning | Free Quote"
    : "Nettoyage gouttières Rive-Sud | Soumission gratuite";
  const defaultDescription = isEnglishPage
    ? "Gutter cleaning, unclogging and gutter guard installation across Montreal's South Shore. Fast service with a free quote."
    : "Nettoyage de gouttières, débouchage et installation de pare-feuilles sur la Rive-Sud. Service rapide et soumission gratuite.";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Les Entretiens Grondin",
    image: `${siteUrl}/logo.webp`,
    url: siteUrl,
    telephone: "+1-819-237-9813",
    areaServed,
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
        <title key="title">{defaultTitle}</title>
        <meta
          name="description"
          content={defaultDescription}
          key="description"
        />
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
        <meta property="og:type" content="website" key="og:type" />
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
        <meta property="og:title" content={defaultTitle} key="og:title" />
        <meta
          property="og:description"
          content={defaultDescription}
          key="og:description"
        />
        <meta property="og:url" content={siteUrl} key="og:url" />
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
        <meta name="twitter:title" content={defaultTitle} key="twitter:title" />
        <meta
          name="twitter:description"
          content={defaultDescription}
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content={`${siteUrl}/logo.webp`}
          key="twitter:image"
        />
        <link rel="canonical" href={siteUrl} key="canonical" />
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
