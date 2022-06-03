import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "yagitatsu",
    name: "yagitatsu",
    role: "CTO",
    bio:
      "パパエンジニア👨‍💻DeNA→メルカリ(ソウゾウ/メルペイ)→Chompy, Inc. (イマココ)。2019年に創業したChompy, Inc. という会社の取締役CTOやってます。",
    avatarSrc: "/avatars/yagitatsu.jpeg",
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
    avatarSrc: "/avatars/chompy_developer.jpeg",
    sources: [
    ],
    twitterUsername: "chompy_dev",
  },
];
