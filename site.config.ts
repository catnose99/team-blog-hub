export const config = {
  siteMeta: {
    title: "Flagment PoC blog",
    teamName: "Flagment PoC.",
    description: "SecurityMinicamp group",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://blog.ctf4.me"
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
