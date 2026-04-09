import React, { createContext, useContext, useMemo } from "react";
import { getI18n, resolveLang } from "./next-i18n";

const NextI18nContext = createContext({
  lang: "fr",
  t: (key) => key,
  get: (_key, fallbackValue) => fallbackValue,
});

export function NextI18nProvider({ locale, children }) {
  const value = useMemo(() => {
    const lang = resolveLang(locale);
    return {
      lang,
      ...getI18n(lang),
    };
  }, [locale]);

  return React.createElement(NextI18nContext.Provider, { value }, children);
}

export function useNextI18n() {
  return useContext(NextI18nContext);
}
