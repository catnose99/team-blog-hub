export const config = {
  siteMeta: {
    title: "Team Blog Hub",
    teamName: "Digitalcube",
    description: "RSS based blog starter kit for teams.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://dc-team-blog-hub.netlify.app/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://www.digitalcube.jp/",
    },
    {
      title: "GitHub",
      href: "https://github.com/digitalcube/team-blog-hub",
    },
  ],
};
