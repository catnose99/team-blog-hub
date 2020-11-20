export const config = {
  siteMeta: {
    title: "Engineer Blog Hub",
    teamName: "Minedia, Inc.",
    description: "RSS based blog site.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://minedia-engineer-hub.vercel.app/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://corporate.minedia.com/",
    },
    {
      title: "GitHub",
      href: "https://github.com/minedia",
    },
  ],
};
