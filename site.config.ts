export const config = {
  siteMeta: {
    title: "IPFactory Blog Hub",
    teamName: "IPFactory",
    description: "IPFactory member's blog hub.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://ipfactory.github.io/team-blog-hub"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "GitHub",
      href: "https://github.com/ipfactory",
    },
  ],
};
