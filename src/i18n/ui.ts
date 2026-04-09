import fr from "./locales/fr.json";
import en from "./locales/en.json";

export const defaultLocale = "fr";
export const locales = ["fr", "en"] as const;

export type Lang = (typeof locales)[number];

export const routes = {
  home: { fr: "", en: "" },
  services: { fr: "services", en: "services" },
  contact: { fr: "contact", en: "contact" },
  faq: { fr: "faq", en: "faq" },
  portfolio: { fr: "realisations", en: "projects" },
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  fr,
  en,
} as const;
