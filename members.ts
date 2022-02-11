import { Member } from "@src/types";



export const members: Member[] = [
  {
    id: `taka`,
    name: "Taka Wakiyama",
    role: "Development",
    bio: "開発屋",
    avatarSrc: "/avatars/F8117FDF.png",
    sources: [],
    githubUsername: "TakaWakiyama",
  },
  {
    id: "sweeep",
    name: "sweeep株式会社(last)",
    role: "owner",
    bio: "公式",
    avatarSrc: "/logo_mark_square_radius.png",
    sources: [
      "https://note.com/sweeep_ai/rss",
    ],
    includeUrlRegex: "",
    twitterUsername: "",
    githubUsername: "",
    websiteUrl: "",
  },
  {
    id: `hirac`,
    name: "Kimihiro Hirashita",
    role: "CTO",
    bio: "雑草系CTO",
    avatarSrc: "/avatars/hirac.jpg",
    sources: [
       "https://zenn.dev/hirac/feed",
    ],
    githubUsername: "hirac1220",
  },
];

