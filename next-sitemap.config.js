/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://entretiensgouttieresrivesud.ca",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  alternateRefs: [
    {
      href: "https://entretiensgouttieresrivesud.ca",
      hreflang: "fr-CA",
    },
    {
      href: "https://entretiensgouttieresrivesud.ca/en",
      hreflang: "en",
    },
  ],
  exclude: ["/404", "/500"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
