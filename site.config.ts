export const config = {
  siteMeta: {
    title: "HiTTO Product Team Blog Hub",
    teamName: "HiTTO",
    description: "HiTTO株式会社のプロダクトチームメンバーのBlog Hub",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://product-blog-hub.hitto.co.jp"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Company",
      href: "https://www.hitto.co.jp",
    }
  ],
};
