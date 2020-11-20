import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "Yuki Matsukura",
    role: "CTO",
    bio:
      "日々学習",
    avatarSrc: "/avatars/matsubokkuri.jpg",
    sources: [
      "https://zenn.dev/matsubokkuri/feed",
      "https://matsu.teraren.com/blog/feed/",
      "https://qiita.com/matsubo/feed",
    ],
    includeUrlRegex: "zenn.dev|teraren.com|qiita.com",
    twitterUsername: "matsubokkuri",
    githubUsername: "matsubo",
    websiteUrl: "https://matsu.teraren.com/blog",
  },
];
