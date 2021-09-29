export default {
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://theclaw.team/",
    site_name: "The Claw Stream Team",
  },
  twitter: {
    handle: "@whitep4nth3r",
    site: "https://theclaw.team",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "msapplication-TileColor",
      content: "#f1101a",
    },
    {
      name: "theme-color",
      content: "#01101a",
    },
  ],
  additionalLinkTags: [
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#0f111a",
    },
    {
      rel: "icon",
      href: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
};
