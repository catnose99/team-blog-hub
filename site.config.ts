export const config = {
  siteMeta: {
    title: "BASSDRUM TECH TEAM BLOG",
    teamName: "BASSDRUM inc.",
    description: "BASSDRUM inc. Tech Team Blog",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://bassdrum-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://bassdrum.org",
    },
    {
      title: "GitHub",
      href: "https://github.com/bassdrum-org",
    },
  ],
};
