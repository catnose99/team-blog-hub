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
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "",
    },
    {
      title: "GitHub",
      href: "",
    },
  ],
};
