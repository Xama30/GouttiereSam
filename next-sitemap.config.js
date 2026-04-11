/** @type {import('next-sitemap').IConfig} */
const SITE_URL = "https://entretiensgouttieresrivesud.ca";

const localizedRoutePairs = [
  { fr: "nos-services", en: "services" },
  { fr: "contactez-nous", en: "contact" },
  { fr: "faq", en: "faq" },
  { fr: "realisation", en: "projects" },
  { fr: "les-differents-types-de-gouttieres", en: "gutter-types" },
  { fr: "quand-nettoyer-ses-gouttieres", en: "when-to-clean-gutters" },
  { fr: "pourquoi-entretenir-ses-gouttieres", en: "why-maintain-gutters" },
  { fr: "comment-nettoyer-ses-gouttieres", en: "how-to-clean-gutters" },
  { fr: "gestion-de-vos-gouttieres", en: "gutter-maintenance-guide" },
];

function normalizePath(inputPath) {
  const rawPath = String(inputPath || "/")
    .split("?")[0]
    .split("#")[0];
  const withLeadingSlash = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  const squashed = withLeadingSlash.replace(/\/{2,}/g, "/");

  if (squashed === "/") {
    return "/";
  }

  return squashed.endsWith("/") ? squashed : `${squashed}/`;
}

function stripEnglishPrefix(path) {
  if (path === "/en") {
    return "/";
  }

  if (path.startsWith("/en/")) {
    const stripped = path.slice(3);
    return stripped || "/";
  }

  return path;
}

function translateSegment(segment, locale) {
  const lowerSegment = segment.toLowerCase();
  const pair = localizedRoutePairs.find((route) => {
    return route.fr === lowerSegment || route.en === lowerSegment;
  });

  if (!pair) {
    return segment;
  }

  return pair[locale];
}

function localizePath(path, locale) {
  const basePath = stripEnglishPrefix(normalizePath(path));
  const segments = basePath.split("/").filter(Boolean);

  if (segments.length === 0) {
    return locale === "en" ? "/en/" : "/";
  }

  const [first, ...rest] = segments;
  const localizedFirst = translateSegment(first, locale);
  const localized = [localizedFirst, ...rest].join("/");

  return locale === "en" ? `/en/${localized}/` : `/${localized}/`;
}

function toAbsoluteUrl(path) {
  const normalized = normalizePath(path);

  if (normalized === "/") {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${normalized}/`;
}

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404", "/500"],
  transform: async (config, path) => {
    const frPath = localizePath(path, "fr");
    const enPath = localizePath(path, "en");

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        {
          href: toAbsoluteUrl(frPath),
          hreflang: "fr-CA",
          hrefIsAbsolute: true,
        },
        {
          href: toAbsoluteUrl(enPath),
          hreflang: "en",
          hrefIsAbsolute: true,
        },
      ],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
