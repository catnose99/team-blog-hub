export const config = {
  siteMeta: {
    title: "Kazuhito Nakayama",
    teamName: "catnose Inc.",
    aboutme: "My mission statement is 'create social good products'. ",
    description: "This is site for outputs of my own.\nRSS based blog starter kit for teams.\nmade by catnose.このサイトは、私のブログをRSSフィードによってまとめたものです。catnoseさんによって、提供されるOSSを使用しております。",
    mydream_en: "My dream  is realizing a society where kind people can be happy. So, I want to create social good products for making the world better place.",
    mydream_ja: "私の夢は、優しい人たちが幸せになれる社会を実現することです。そのために、世界をより良くするためのソーシャルグッドなプロダクトを作りたいと思っています。"
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
