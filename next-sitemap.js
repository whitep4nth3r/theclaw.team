module.exports = {
  siteUrl: "https://theclaw.team",
  generateRobotsTxt: true, // (optional)
  exclude: ["/api/*", "404", "/server-sitemap.xml", "/unauthorized", "/backstage"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://theclaw.team/server-sitemap.xml"],
    policies: [
      {
        userAgent: "*",
        disallow: ["/api", , "/404", "/backstage", "/unauthorized"],
      },
    ],
  },
};
