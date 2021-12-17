export const config = {
  siteMeta: {
    title: "justInCaseTechnologies Team Blog Hub",
    teamName: "justInCaseTechnologies, Inc.",
    description: "RSS based blog starter kit for teams.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://tech-hub.justincase-tech.com"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://justincase-tech.com/",
    },
    {
      title: "GitHub",
      href: "https://github.com/justincase-jp",
    },
  ],
};
