import { Member } from "@src/types";

// TODO GitHub PagesではURLに https://syninc.github.io/が含まれるため,avatarSrcの前にurlPrefixが必要
const urlPrefix = process.env.NODE_ENV === "production" ? '/chompy-developers-blog' : ''

export const members: Member[] = [
  {
    id: "yagitatsu",
    name: "yagitatsu",
    role: "CTO",
    bio:
      "パパエンジニア👨‍💻DeNA→メルカリ(ソウゾウ/メルペイ)→Chompy, Inc. (イマココ)。2019年に創業したChompy, Inc. という会社の取締役CTOやってます。",
    avatarSrc: `${urlPrefix}/avatars/yagitatsu.jpeg`,
    sources: [
      "https://note.com/tatsuyayagi/rss",
      "https://qiita.com/yagitatsu/feed",
    ],
    twitterUsername: "yagitatsu3",
    githubUsername: "yagitatsu",
  },
  {
    id: "chompy_developer",
    name: "Chompy Developer",
    bio:
        "Chompyのエンジニアアカウントです。技術関連のことやブログやPodcastの更新情報をつぶやきます💡 アプリの利用に関するお問い合わせはアプリ内の「困ったときは」よりお送りください。",
    avatarSrc: `${urlPrefix}/avatars/chompy_developer.jpeg`,
    sources: [
        "https://anchor.fm/s/70ca842c/podcast/rss",
        "https://note.com/chompy/rss"
    ],
    twitterUsername: "chompy_dev",
  },
  {
    id: "ogiogi",
    name: "ogiogi",
    bio:
        "料理人兼エンジニアです。自分のお店を持つために修行中です。",
    avatarSrc: `${urlPrefix}/avatars/ogiogi.jpeg`,
    sources: [
      "https://note.com/ogiogi93/rss",
    ],
    twitterUsername: "ogiogi93",
    githubUsername: "ogiogi93",
  },
  {
    id: "suzukenz",
    name: "suzukenz",
    bio: "趣味でもエンジニアをやる。",
    avatarSrc: `${urlPrefix}/avatars/suzukenz.jpeg`,
    sources: [
      "https://qiita.com/suzukenz/feed",
      "https://zenn.dev/suzukenz/feed",
    ],
    twitterUsername: "suzukenzz",
    githubUsername: "suzukenz",
    websiteUrl:"https://blog.suzukenz.jp/"
  },
  {
    id: "tyapama",
    name: "taishi",
    bio: "エンジニアです。ひいらぎのたい焼きが好きです。技術広報も兼任しています。",
    avatarSrc: `${urlPrefix}/avatars/taishi.jpeg`,
    githubUsername: "tyapama",
  },
];
