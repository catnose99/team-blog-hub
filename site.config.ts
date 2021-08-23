export const config = {
  siteMeta: {
    title: "Kazuhito Nakayama",
    teamName: "catnose Inc.",
    aboutme: "My mission statement is 'create social good products'. ",
    description: "This is site for outputs of my own.\nRSS based blog starter kit for teams.\nmade by catnose.このサイトは、私のブログをRSSフィードによってまとめたものです。catnoseさんによって、提供されるOSSを使用しております。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://zenn.dev/catnose99/articles/cb72a73368a547756862",
    },
    {
      title: "GitHub",
      href: "https://github.com/kazuhitonakayama",
    },
  ],
};
