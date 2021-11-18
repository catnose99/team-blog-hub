export const config = {
  siteMeta: {
    title: "Lisa Output Hub",
    teamName: "Lisa Technologies Inc.",
    description: "Lisa Technologies株式会社のメンバーの投稿が集まります",
    siteUrl: "https://dev-blog.lisatech.jp/",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://dev-blog.lisatech.jp/"
      : "http://localhost:3000",
  // 3つ以上にするとレスポンシブのために改修が必要
  // HPはLisa Officialのmemberページからリンクしてあるので下記の2つを選択
  headerLinks: [
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
