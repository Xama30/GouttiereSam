import { useMemo } from "react";

export function useRouter() {
  return useMemo(() => {
    if (typeof window === "undefined") {
      return {
        asPath: "/",
        pathname: "/",
        locale: "fr-CA",
      };
    }

    const { pathname, search, hash } = window.location;
    const asPath = `${pathname}${search}${hash}`;
    const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

    return {
      asPath,
      pathname,
      locale: isEnglish ? "en" : "fr-CA",
    };
  }, []);
}

export default {
  useRouter,
};
