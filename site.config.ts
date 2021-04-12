export const config = {
  siteMeta: {
    title: "ysmtegsr.com",
    description: "RSS based blog.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://ysmtegsr.com"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Resume",
      href: "/resume",
    }
    // {
    //   title: "GitHub",
    //   href: "https://github.com/catnose99/team-blog-hub",
    // },
  ],
};
