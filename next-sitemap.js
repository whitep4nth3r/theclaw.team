module.exports = {
  siteUrl: "https://theclaw.team",
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/api",
        disallow: "/404",
        disallow: "/backstage",
        disallow: "/unauthorized",
      },
    ],
  },
  exclude: ["/api/*", "404", "/server-sitemap.xml", "/unauthorized", "/backstage"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://theclaw.team/server-sitemap.xml"],
  },
};
