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
    ],
    twitterUsername: "chompy_dev",
  },
];
