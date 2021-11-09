export const config = {
  siteMeta: {
    title: "Lisa's Output Hub",
    teamName: "Lisa Technologies Inc.",
    description: "Lisa Technologies株式会社のメンバーの投稿が集まります",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Company",
      href: "https://lisatech.jp/",
    },
    {
      title: "Product",
      href: "https://fooddeliverymanager.com/",
    },
    {
      title: "Recruit",
      href: "https://www.wantedly.com/companies/lisatech",
    },
  ],
};
