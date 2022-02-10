import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "ryan",
    name: "ryan",
    role: "CTO",
    fullName:
      "Ryosuke Tsuji",
    avatarSrc: "/avatars/ryan.jpg",
    sources: [
      "https://qiita.com/thujikun@github/feed.atom",
    ],
    includeUrlRegex: "qiita.com",
    twitterUsername: "RyanAircloset",
    githubUsername: "thujikun",
    websiteUrl: "",
  },
  // {
  //   id: "airCloset",
  //   name: "airCloset common",
  //   role: "NONE",
  //   bio: "共通アカウント",
  //   avatarSrc: "/avatars/doe.jpg",
  //   sources: ["https://note.com/air_closet/n/n62a29852a6a8"],
  // },
  {
    id: "bruno",
    name: "bruno",
    role: "Engineer",
    fullName: "Satoshi Nitawaki",
    avatarSrc: "/avatars/amanda.jpg",
    sources: [
      "https://qiita.com/nitaking/feed.atom",
      "https://zenn.dev/nitaking/feed"
    ],
    twitterUsername: "_nitaking",
    githubUsername: "nitaking",
  },
  {
    id: "miguel",
    name: "miguel",
    role: "",
    fullName: "Chikara Miyoshi",
    avatarSrc: "/avatars/junji.jpg",
    sources: [
      "https://qiita.com/miyomiyo344/feed.atom",
    ],
    githubUsername: "miyomiyo344",
  },
  {
    id: "uminchu",
    name: "uminchu",
    role: "",
    fullName: "Shu Kubota",
    avatarSrc: "/avatars/junji.jpg",
    sources: [
      "https://qiita.com/Umibows/feed.atom",
    ],
    githubUsername: "shukubota",
  },
  {
    id: "esta",
    name: "esta",
    role: "",
    fullName: "Shogo Kobayashi",
    avatarSrc: "/avatars/naoko.jpg",
    sources: [],
  },
  {
    id: "aaron",
    name: "aaron",
    role: "",
    fullName: "Seung Woo Jang",
    avatarSrc: "/avatars/alexandria.jpg",
    sources: [],
  },
];
