export const config = {
  siteMeta: {
    title: "sweeep Blog Hub",
    teamName: "sweeep Inc.",
    description: "RSS based blog starter kit for teams.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://sweeep-blog-hub.web.app/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "トップ",
      href: "/"

    },
    {
      title: "会社情報",
      href: "https://corp.sweeep.ai",
    },
    {
      title: "採用情報",
      href: "https://corp.sweeep.ai/recruit",
    },
  ],
};
