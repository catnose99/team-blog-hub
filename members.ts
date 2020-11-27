import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "Yuki Matsukura",
    role: "CTO",
    bio:
      "日々学習",
    avatarSrc: "https://gravatar.com/avatar/5aae2aeace0b0ec7b82619f68b6d905f?s=400&d=robohash&r=x",
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
  {
    name: "Hajime Takeda",
    role: "Data Scientist",
    bio:
      "駆け出しデータサイエンティスト。コーヒーが好きです。",
    avatarSrc: "https://avatars1.githubusercontent.com/u/8223210?s=400&u=bd4b2b1ff493f380a93eb11366db3c58a025b047&v=4",
    sources: [
      "https://qiita.com/takechanman1228/feed",
    ],
    githubUsername: "takechanman1228",
  },
  {
    name: "Hiroya Suzuki",
    role: "CEO",
    bio:
      "4649",
    avatarSrc: "https://gravatar.com/avatar/d6c558853d3a571260c7efc92a5947f6?s=400&d=robohash&r=x",
    sources: [
      "https://qiita.com/piroya/feed",
    ],
    includeUrlRegex: "zenn.dev|teraren.com|qiita.com",
    githubUsername: "piroya"
  }
];
