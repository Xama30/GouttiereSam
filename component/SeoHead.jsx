import React from "react";
import Head from "next/head";

const SITE_URL = "https://entretiensgouttieresrivesud.ca";
const SITE_NAME = "Les Entretiens Grondin";
const DEFAULT_IMAGE = "/logo.webp";

function toAbsoluteUrl(value) {
  if (!value) {
    return "";
  }

  if (/^https?:\/\//i.test(value)) {
    return value.endsWith("/") ? value : `${value}/`;
  }

  const path = value.startsWith("/") ? value : `/${value}`;
  const normalizedPath = path.endsWith("/") ? path : `${path}/`;
  return `${SITE_URL}${normalizedPath}`;
}

function SeoHead({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  locale = "fr_CA",
  type = "website",
  alternates = [],
  noIndex = false,
}) {
  const canonicalUrl = toAbsoluteUrl(url);
  const imageUrl = toAbsoluteUrl(image);
  const robotsContent = noIndex
    ? "noindex,nofollow"
    : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";

  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="robots" content={robotsContent} key="robots" />

      <meta property="og:type" content={type} key="og:type" />
      <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />
      <meta property="og:locale" content={locale} key="og:locale" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:url" content={canonicalUrl} key="og:url" />
      <meta property="og:image" content={imageUrl} key="og:image" />

      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta name="twitter:image" content={imageUrl} key="twitter:image" />

      <link rel="canonical" href={canonicalUrl} key="canonical" />
      {alternates.map(({ hrefLang, href }) => (
        <link
          rel="alternate"
          hrefLang={hrefLang}
          href={toAbsoluteUrl(href)}
          key={`alternate-${hrefLang}`}
        />
      ))}
    </Head>
  );
}

export default SeoHead;
