import { defaultLocale, routes, ui, type Lang, type RouteKey } from "./ui";

type TranslateVars = Record<string, string | number>;
type TranslationDictionary = Record<string, unknown>;

function resolveKey(
  dictionary: TranslationDictionary,
  key: string,
): string | undefined {
  const value = key
    .split(".")
    .reduce<unknown>(
      (acc, part) =>
        acc && typeof acc === "object"
          ? (acc as TranslationDictionary)[part]
          : undefined,
      dictionary,
    );

  return typeof value === "string" ? value : undefined;
}

function interpolate(template: string, vars: TranslateVars): string {
  return Object.entries(vars).reduce((acc, [token, value]) => {
    return acc.replaceAll(`{${token}}`, String(value));
  }, template);
}

const routeEntries = Object.entries(routes) as Array<
  [RouteKey, (typeof routes)[RouteKey]]
>;

function localizePathSegment(segment: string, lang: Lang): string {
  if (!segment) {
    return "";
  }

  const directRoute = routes[segment as RouteKey];
  if (directRoute) {
    return directRoute[lang];
  }

  const slugMatch = routeEntries.find(([, localized]) => {
    return (
      localized.fr.toLowerCase() === segment.toLowerCase() ||
      localized.en.toLowerCase() === segment.toLowerCase()
    );
  });

  return slugMatch ? slugMatch[1][lang] : segment;
}

export function getRouteSlug(route: RouteKey, lang: Lang): string {
  return routes[route][lang];
}

export function useTranslations(lang: Lang) {
  return (key: string, vars: TranslateVars = {}): string => {
    const dictionary = (ui[lang] ?? ui[defaultLocale]) as TranslationDictionary;
    const fallback = ui[defaultLocale] as TranslationDictionary;

    const rawValue =
      resolveKey(dictionary, key) ?? resolveKey(fallback, key) ?? key;
    return interpolate(rawValue, vars);
  };
}

export function getLocalizedPath(lang: Lang, path: string | RouteKey): string {
  const cleanPath = String(path)
    .replace(/^\/+|\/+$/g, "")
    .replace(/^en(?=\/|$)/, "")
    .replace(/^\/+|\/+$/g, "");

  if (!cleanPath) {
    return lang === "fr" ? "/" : "/en";
  }

  const segments = cleanPath.split("/").filter(Boolean);
  const [head, ...tail] = segments;
  const localizedHead = localizePathSegment(head, lang);
  const localizedPath = [localizedHead, ...tail].filter(Boolean).join("/");

  if (!localizedPath) {
    return lang === "fr" ? "/" : "/en";
  }

  return lang === "fr" ? `/${localizedPath}` : `/en/${localizedPath}`;
}
