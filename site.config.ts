export const config = {
  siteMeta: {
    title: "Ubie Software Engineers",
    teamName: "Ubie, inc.",
    description: "Ubieのソフトウェアエンジニアのブログとか",
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
      href: "https://ubie.life/",
    },
    {
      title: "Recruit",
      href: "https://herp.careers/v1/ubie/him9Aiqxd-Ja",
    },
  ],
};
