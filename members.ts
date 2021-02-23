import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "KazuhitoNakayama",
    role: "Web Dev",
    bio:
      "Web制作をしたり、2CののWebサービスを開発したりしてます。",
    avatarSrc: "/avatars/favicon_kazu.png",
    sources: [
      "https://zenn.dev/be_the_light/feed",
      "https://qiita.com/facultyoflaw11/feed.atom",
      "https://note.com/kazu_major_law/rss",
    ],
    includeUrlRegex: "qiita.com|zenn.dev|note.com",
    twitterUsername: "candle_hub",
    githubUsername: "kazuhitonakayama",
    websiteUrl: "https://k-creative.tech",
  },
];
