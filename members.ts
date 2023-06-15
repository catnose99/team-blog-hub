import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "BASSDRUM",
    name: "BASSDRUM inc.",
    role: "Company",
    bio: "",
    avatarSrc: "/avatars/bassdrum.jpg",
    sources: [
        "https://note.com/bassdrum/rss"
    ],
    twitterUsername: "BASSDRUM_org",
    githubUsername: "bassdrum-org",
  },
  {
    id: "ToyoshiMorioka",
    name: "Toyoshi Morioka",
    role: "Technical Director",
    bio: "",
    avatarSrc: "/avatars/toyoshimorioka.jpg",
    sources: [
        "https://note.com/toyoshimorioka/rss",
        "https://zenn.dev/toyoshimorioka/feed?include_scraps=true",
        "https://qiita-feed.saqoosha.workers.dev/toyoshimorioka"
    ],
    twitterUsername: "mogamogamachine",
    githubUsername: "ToyoshiMorioka",
  },
  {
    id: "hige",
    name: "Takanobu Izukawa",
    role: "System Engineer",
    bio: "",
    avatarSrc: "/avatars/hige.png",
    sources: [
      "https://zenn.dev/hige/feed?include_scraps=true"
    ],
    twitterUsername: "soundkitchen",
    githubUsername: "soundkitchen",
    websiteUrl: "https://izukawa.org",
  }
];
