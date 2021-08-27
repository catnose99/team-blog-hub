export const config = {
  siteMeta: {
    title: "Ubie Engineers' Blogs",
    teamName: 'Ubie Discovery',
    description: 'Ubie Discoveryに所属するエンジニアのブログ記事をまとめています。',
  },
  siteRoot: process.env.NODE_ENV === 'production' ? 'https://blog.ubie.tech' : 'http://localhost:3000',
  headerLinks: [
    {
      title: 'Company',
      href: 'https://ubie.life/',
    },
    {
      title: 'Recruit',
      href: 'https://recruit.ubie.life/jd_dev',
    },
  ],
};
