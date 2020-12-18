import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "thdy",
    role: "Corporate Engineer",
    bio:
      "広島在住のリモートワーカーです。",
    avatarSrc: "/avatars/thdy.jpg",
    sources: [
      "https://zenn.dev/thdy/feed",
      "https://note.com/thdy/rss",
      "https://qiita.com/THDY/feed.atom",
      "https://thdy.hatenablog.jp/rss"
    ],
    includeUrlRegex: "zenn.dev|note.com|qiita.com|hatenablog.jp",
    twitterUsername: "thdy5",
    githubUsername: "thdy",
    websiteUrl: "https://thdy.jp",
  },
];
