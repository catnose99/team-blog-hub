import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "KazuhitoNakayama",
    role: "CTO",
    bio:
      "デザインが好きなプログラマー。開発者向けの情報共有プラットフォームzenn.devを開発しています。",
    avatarSrc: "/avatars/catnose.jpg",
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
