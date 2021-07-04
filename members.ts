import { Member } from '@src/types';

// eslint-disable-next-line import/prefer-default-export
export const members: Member[] = [
  {
    name: 'PareoSan',
    role: 'Health',
    bio: 'Site Reliability Engineer.',
    avatarSrc: '/avatars/doe.jpg',
    avatarEmoji: '🧪',
    sources: [
      'https://yuchrszk.blogspot.com/feeds/posts/default?alt=rss',
      'https://ch.nicovideo.jp/paleo/blomaga/nico/feed',
    ],

    twitterUsername: 'yuchrszk',
  },
  {
    name: 'NextjsTrend',
    role: 'Frontend dev',
    bio: 'Frontend developer,',
    avatarSrc: '/avatars/amanda.jpg',
    avatarEmoji: '⏭',
    sources: ['https://zenn.dev/topics/nextjs/feed'],
  },
  {
    name: 'JavascriptTrend',
    role: 'Frontend dev',
    bio: 'Frontend developer,',
    avatarSrc: '/avatars/amanda.jpg',
    avatarEmoji: '🟨',
    sources: ['https://zenn.dev/topics/javascript/feed'],
  },
  {
    name: 'CatNose',
    role: 'Programming',
    bio: 'デザインが好きなプログラマー。開発者向けの情報共有プラットフォームzenn.devを開発しています。',
    avatarSrc: '/avatars/catnose.jpg',
    avatarEmoji: '🐱',
    sources: [
      'https://zenn.dev/catnose99/feed',
      'https://medium.com/feed/@catnose99',
      'https://note.com/catnose/rss',
      'https://qiita.com/catnose99/feed.atom',
    ],
    includeUrlRegex: 'medium.com|zenn.dev',
    twitterUsername: 'catnose99',
    githubUsername: 'catnose99',
    websiteUrl: 'https://catnose99.com',
  },
  {
    name: 'Adachi',
    role: 'Tech Lead',
    bio: 'IT professional with 3 years of experience',
    avatarSrc: '/avatars/alexandria.jpg',
    avatarEmoji: '🧑',
    sources: ['https://zenn.dev/a_da_chi/feed'],
  },
  {
    name: 'Adachi',
    role: 'Tech Lead',
    bio: 'IT professional with 3 years of experience',
    avatarSrc: '/avatars/alexandria.jpg',
    avatarEmoji: '🧑',
    sources: ['https://zenn.dev/a_da_chi/feed'],
  },
];
