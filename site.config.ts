export const config = {
  siteMeta: {
    title: "Fragment PoC blog",
    teamName: "Fragment PoC.",
    description: "SecurityMinicamp group",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://minicamp.ctf4.me"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "GitHub",
      href: "https://github.com/lufeee/team-blog-hub",
    },
  ],
};
