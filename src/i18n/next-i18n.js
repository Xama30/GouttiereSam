import fr from "./locales/fr.json";
import en from "./locales/en.json";

const dictionaries = { fr, en };
const defaultLang = "fr";

function resolveKey(dictionary, key) {
  return key.split(".").reduce((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return acc[part];
    }

    return undefined;
  }, dictionary);
}

function interpolate(template, vars) {
  return Object.entries(vars).reduce((acc, [token, value]) => {
    return acc.replaceAll(`{${token}}`, String(value));
  }, template);
}

export function resolveLang(locale) {
  const normalizedLocale = String(locale || "").toLowerCase();
  return normalizedLocale === "en" || normalizedLocale.startsWith("en-")
    ? "en"
    : "fr";
}

export function getI18n(lang = defaultLang) {
  const dictionary = dictionaries[lang] ?? dictionaries[defaultLang];
  const fallback = dictionaries[defaultLang];

  const t = (key, vars = {}) => {
    const rawValue =
      resolveKey(dictionary, key) ?? resolveKey(fallback, key) ?? key;

    if (typeof rawValue !== "string") {
      return key;
    }

    return interpolate(rawValue, vars);
  };

  const get = (key, fallbackValue = undefined) => {
    const value = resolveKey(dictionary, key);

    if (value !== undefined) {
      return value;
    }

    const fallbackFromDefault = resolveKey(fallback, key);
    if (fallbackFromDefault !== undefined) {
      return fallbackFromDefault;
    }

    return fallbackValue;
  };

  return { t, get };
}
