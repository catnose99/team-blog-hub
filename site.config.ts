export const config = {
  siteMeta: {
    title: "Whatever Dev Blog",
    teamName: "Whatever Co.",
    description: "Whatever Co. Dev Team Blog",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://whatever-dev-blog.vercel.app/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://whatever.co",
    },
    {
      title: "GitHub",
      href: "https://github.com/Whatever-Co",
    },
  ],
};
