import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "catnose",
    name: "CatNose",
    role: "CTO",
    bio:
      "デザインが好きなプログラマー。開発者向けの情報共有プラットフォームzenn.devを開発しています。",
    avatarSrc: "/avatars/catnose.jpg",
    sources: [
      "https://zenn.dev/catnose99/feed",
      "https://catnose.medium.com/feed",
    ],
    includeUrlRegex: "medium.com|zenn.dev",
    twitterUsername: "catnose99",
    githubUsername: "catnose99",
    websiteUrl: "https://catnose99.com",
  },
  {
    id: "john_doe",
    name: "John Doe",
    role: "SRE",
    bio: "Site Reliability Engineer.",
    avatarSrc: "/avatars/doe.jpg",
    sources: ["https://note.com/catnose/rss"],
    excludeUrlRegex: "n3a59e3cdd820",
    twitterUsername: "catnose99",
  },
  {
    id: "amanda",
    name: "Amanda",
    role: "Frontend dev",
    bio: "Frontend developer,",
    avatarSrc: "/avatars/amanda.jpg",
    sources: ["https://qiita.com/catnose99/feed.atom"],
    twitterUsername: "catnose99",
  },
  {
    id: "takada_junji",
    name: "Takada Junji",
    role: "Designer",
    bio: "Designing all of the apps in Foo company.",
    avatarSrc: "/avatars/junji.jpg",
    sources: [],
  },
  {
    id: "ota_naoko",
    name: "太田 直子",
    role: "Researcher",
    bio: "Some texts here",
    avatarSrc: "/avatars/naoko.jpg",
    sources: [],
  },
  {
    id: "alexandria",
    name: "Alexandria",
    role: "Tech Lead",
    bio: "IT professional with 3 years of experience",
    avatarSrc: "/avatars/alexandria.jpg",
    sources: [],
  },
];
