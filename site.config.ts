// site.config.ts
// src/components/PageSEO.tsx,SiteFooter.tsx,SiteHeader.tsx,
// src/pages/_app.tsx,index.tsx,
// src/pages/members/index.tsx

// eslint-disable-next-line import/prefer-default-export
export const config = {
  siteMeta: {
    title: '🧪Test Hub for Portfolio',
    teamName: 'Example Inc.',
    description: 'My Sandbox.',
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
      title: '👩‍💻GitHub',
      href: 'https://github.com/yuki1111117/team-blog-hub',
    },
  ],
};
