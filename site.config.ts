export const config = {
  siteMeta: {
    title: "sweeep Blog Hub",
    teamName: "sweeep Inc.",
    description: `請求書の受取・仕訳・振込を自動化するプロダクト開発を行なっている
    sweeep株式会社開発チームの技術記事をまとめたサイトです
    `,
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://tech-blog.sweeep.ai"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "トップ",
      href: "/"

    },
    {
      title: "会社情報",
      href: "https://corp.sweeep.ai",
    },
    {
      title: "採用情報",
      href: "https://corp.sweeep.ai/recruit",
    },
  ],
};
