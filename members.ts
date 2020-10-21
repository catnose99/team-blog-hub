import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "CatNose",
    role: "CTO",
    bio:
      "デザインが好きなプログラマー。開発者向けの情報共有プラットフォームzenn.devを開発しています。",
    avatarFileName: "catnose.jpg",
    sources: [
      "https://zenn.dev/catnose99/feed",
      "https://note.com/catnose/rss",
    ],
  },
  {
    name: "John Doe",
    role: "SRE",
    bio: "Site Reliability Engineer.",
    avatarFileName: "doe.jpg",
    sources: ["https://zenn.dev/zenn/feed"],
  },
  {
    name: "Amanda",
    role: "Frontend dev",
    bio: "Frontend developer,",
    avatarFileName: "amanda.jpg",
    sources: ["https://medium.com/feed/@Medium"],
  },
  {
    name: "Takada Junji",
    role: "Designer",
    bio: "Designing all of the apps in Foo company.",
    avatarFileName: "junji.jpg",
    sources: [],
  },
  {
    name: "Ota Naoko",
    role: "Researcher",
    bio: "Some texts here",
    avatarFileName: "naoko.jpg",
    sources: [],
  },
  {
    name: "Alexandria",
    role: "Tech Lead",
    bio: "IT professional with 3 years of experience",
    avatarFileName: "alexandria.jpg",
    sources: [],
  },
];
