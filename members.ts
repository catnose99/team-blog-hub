import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "CatNose",
    role: "Programming",
    bio:
      "デザインが好きなプログラマー。開発者向けの情報共有プラットフォームzenn.devを開発しています。",
    avatarSrc: "/avatars/catnose.jpg",
    sources: [
      "https://zenn.dev/catnose99/feed",
      "https://medium.com/feed/@catnose99",
      "https://note.com/catnose/rss",
      "https://qiita.com/catnose99/feed.atom"
    ],
    includeUrlRegex: "medium.com|zenn.dev",
    twitterUsername: "catnose99",
    githubUsername: "catnose99",
    websiteUrl: "https://catnose99.com",
  },
  {
    name: "パレオさん",
    role: "Health",
    bio: "Site Reliability Engineer.",
    avatarSrc: "/avatars/doe.jpg",
    sources: ["https://yuchrszk.blogspot.com/feeds/posts/default?alt=rss",
    "https://ch.nicovideo.jp/paleo/blomaga/nico/feed"
     ],
    twitterUsername: "yuchrszk",
  },
  {
    name: "Amanda",
    role: "Frontend dev",
    bio: "Frontend developer,",
    avatarSrc: "/avatars/amanda.jpg",
    sources: [],
  },
  {
    name: "Takada Junji",
    role: "Designer",
    bio: "Designing all of the apps in Foo company.",
    avatarSrc: "/avatars/junji.jpg",
    sources: [],
  },
  {
    name: "Ota Naoko",
    role: "Researcher",
    bio: "Some texts here",
    avatarSrc: "/avatars/naoko.jpg",
    sources: [],
  },
  {
    name: "Alexandria",
    role: "Tech Lead",
    bio: "IT professional with 3 years of experience",
    avatarSrc: "/avatars/alexandria.jpg",
    sources: [],
  },
];
