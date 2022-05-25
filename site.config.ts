export const config = {
  siteMeta: {
    title: "Chompy Developers' Blog",
    teamName: "Chompy, Inc.",
    description: "Chompy を運営する Chompy, Inc. の開発メンバーのBlogを一覧できます。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Company",
      href: "https://chompy-inc.com/",
    },
    {
      title: "Recruit",
      href: "https://chompy-inc.com/recruit/",
    },
  ],
};
