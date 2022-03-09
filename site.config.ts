export const config = {
  siteMeta: {
    title: "3-shake Engineers' Blogs",
    teamName: "3-shake Inc.",
    description: "3-shake に所属するエンジニアのブログ記事をまとめています。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://blog.3-shake.com/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Recruit",
      href: "https://3-shake.com/category/recruit/",
    },
    {
      title: "Company",
      href: "https://3-shake.com/",
    },
  ],
};
