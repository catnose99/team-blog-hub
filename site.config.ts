export const config = {
  siteMeta: {
    title: "Knowledge Work Team Blog Hub",
    teamName: "Knowledge Work Inc.",
    description: "株式会社ナレッジワークのチームメンバーのBlog Hub",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:5000",
  headerLinks: [
    {
      title: "Company",
      href: "https://kwork.studio",
    },
    {
      title: "GitHub",
      href: "https://github.com/knowledge-work/team-blog-hub",
    },
  ],
};
