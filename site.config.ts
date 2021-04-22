export const config = {
  siteMeta: {
    title: "ysmtegsr.com",
    description: "社会人 3 年目のソフトウェアエンジニア ysmtegsr のアウトプット集約 Web サイト",
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
  ]
};
