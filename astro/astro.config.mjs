import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import astroCompress from "astro-compress";
import { fileURLToPath } from "node:url";
import { routes } from "./src/i18n/ui";

const nextLinkShim = fileURLToPath(
  new URL("./src/shims/next-link.jsx", import.meta.url),
);
const nextImageShim = fileURLToPath(
  new URL("./src/shims/next-image.jsx", import.meta.url),
);
const nextRouterShim = fileURLToPath(
  new URL("./src/shims/next-router.js", import.meta.url),
);
const siteUrl = "https://entretiensgouttieresrivesud.ca";

const toLocaleRoutePath = (slug, lang) => {
  const cleanedSlug = String(slug ?? "").replace(/^\/+|\/+$/g, "");
  if (!cleanedSlug) {
    return lang === "fr" ? "/" : "/en/";
  }

  return lang === "fr" ? `/${cleanedSlug}/` : `/en/${cleanedSlug}/`;
};

const coreAlternateRoutePairs = Object.values(routes).map(({ fr, en }) => ({
  frPath: toLocaleRoutePath(fr, "fr"),
  enPath: toLocaleRoutePath(en, "en"),
}));

const normalizeSitemapPath = (value) => {
  const pathname = new URL(value).pathname;
  if (pathname === "/") {
    return pathname;
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
};

const coreAlternateLinkMap = new Map(
  coreAlternateRoutePairs.flatMap((pair) => {
    const frUrl = new URL(pair.frPath, siteUrl).toString();
    const enUrl = new URL(pair.enPath, siteUrl).toString();
    const links = [
      { lang: "fr-CA", url: frUrl },
      { lang: "en-CA", url: enUrl },
    ];

    return [
      [normalizeSitemapPath(frUrl), links],
      [normalizeSitemapPath(enUrl), links],
    ];
  }),
);

export default defineConfig({
  site: siteUrl,
  output: "static",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: {
          fr: "fr-CA",
          en: "en-CA",
        },
      },
      serialize(item) {
        const customLinks = coreAlternateLinkMap.get(
          normalizeSitemapPath(item.url),
        );
        if (!customLinks) {
          return item;
        }

        return {
          ...item,
          links: customLinks,
        };
      },
    }),
    astroCompress(),
  ],
  vite: {
    resolve: {
      alias: {
        "next/link": nextLinkShim,
        "next/image": nextImageShim,
        "next/router": nextRouterShim,
      },
    },
    css: {
      devSourcemap: true,
    },
  },
});
