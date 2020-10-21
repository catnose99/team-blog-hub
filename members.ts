import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "CatNose",
    role: "CTO",
    bio:
      "デザインが好きなプログラマー。開発者向けの情報共有プラットフォームzenn.devを開発しています。",
    avatarSrc: "/avatars/catnose.jpg",
    sources: [
      "https://zenn.dev/catnose99/feed",
      "https://medium.com/feed/@catnose99",
    ],
  },
  {
    name: "John Doe",
    role: "SRE",
    bio: "Site Reliability Engineer.",
    avatarSrc: "/avatars/doe.jpg",
    sources: ["https://note.com/catnose/rss"],
    excludeUrlRegex: "n3a59e3cdd820",
  },
  {
    name: "Amanda",
    role: "Frontend dev",
    bio: "Frontend developer,",
    avatarSrc: "/avatars/amanda.jpg",
    sources: ["https://qiita.com/catnose99/feed.atom"],
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
