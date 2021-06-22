// site.config.ts
// src/components/PageSEO.tsx,SiteFooter.tsx,SiteHeader.tsx,
// src/pages/_app.tsx,index.tsx,
// src/pages/members/index.tsx

// eslint-disable-next-line import/prefer-default-export
export const config = {
  siteMeta: {
    title: 'Team Blog Hub',
    teamName: 'catnose Inc.',
    description: 'RSS based blog starter kit for teams.',
  },
  siteRoot:
    process.env.NODE_ENV === 'production'
      ? 'https://team-blog-hub.vercel.app'
      : 'http://localhost:3000',
  headerLinks: [
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Company',
      href: 'https://zenn.dev/catnose99/articles/cb72a73368a547756862',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/catnose99/team-blog-hub',
    },
  ],
};
