import { resolveLang } from "./next-i18n";

export const coreRoutes = {
  home: { fr: "", en: "" },
  services: { fr: "nos-services", en: "services" },
  contact: { fr: "contactez-nous", en: "contact" },
  faq: { fr: "faq", en: "faq" },
  portfolio: { fr: "realisation", en: "projects" },
};

const informationRoutes = {
  gutterTypes: {
    fr: "les-differents-types-de-gouttieres",
    en: "gutter-types",
  },
  whenToCleanGutters: {
    fr: "quand-nettoyer-ses-gouttieres",
    en: "when-to-clean-gutters",
  },
  whyMaintainGutters: {
    fr: "pourquoi-entretenir-ses-gouttieres",
    en: "why-maintain-gutters",
  },
  howToCleanGutters: {
    fr: "comment-nettoyer-ses-gouttieres",
    en: "how-to-clean-gutters",
  },
  gutterMaintenanceGuide: {
    fr: "gestion-de-vos-gouttieres",
    en: "gutter-maintenance-guide",
  },
};

const localizedRoutes = {
  ...coreRoutes,
  ...informationRoutes,
};

const routeEntries = Object.entries(localizedRoutes);

function stripPathDecorators(path) {
  return String(path || "")
    .split("?")[0]
    .split("#")[0]
    .replace(/^\/+|\/+$/g, "")
    .replace(/^en(?=\/|$)/, "")
    .replace(/^\/+|\/+$/g, "");
}

function localizeFirstSegment(segment, lang) {
  if (!segment) {
    return "";
  }

  const directRoute = localizedRoutes[segment];
  if (directRoute) {
    return directRoute[lang];
  }

  const matchedRoute = routeEntries.find(([, route]) => {
    return (
      route.fr.toLowerCase() === segment.toLowerCase() ||
      route.en.toLowerCase() === segment.toLowerCase()
    );
  });

  return matchedRoute ? matchedRoute[1][lang] : segment;
}

export function getLocalizedPath(langOrLocale, pathOrRoute = "") {
  const lang = resolveLang(langOrLocale);

  if (Object.prototype.hasOwnProperty.call(coreRoutes, pathOrRoute)) {
    const slug = coreRoutes[pathOrRoute][lang];
    if (!slug) {
      return lang === "en" ? "/en" : "/";
    }

    return lang === "en" ? `/en/${slug}` : `/${slug}`;
  }

  const cleanPath = stripPathDecorators(pathOrRoute);

  if (!cleanPath) {
    return lang === "en" ? "/en" : "/";
  }

  const segments = cleanPath.split("/").filter(Boolean);
  const [head, ...tail] = segments;
  const localizedHead = localizeFirstSegment(head, lang);
  const localizedPath = [localizedHead, ...tail].filter(Boolean).join("/");

  if (!localizedPath) {
    return lang === "en" ? "/en" : "/";
  }

  return lang === "en" ? `/en/${localizedPath}` : `/${localizedPath}`;
}
