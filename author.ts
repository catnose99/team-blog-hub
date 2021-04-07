import { Author } from "@src/types";

export const author: Author = {
  name: "ヨッシー",
  role: "ソフトウェアエンジニア",
  bio: "社会人 3 年目のソフトウェアエンジニア 25 歳。担当業務はバックエンドからフロントエンド、インフラと多岐に渡ってこなします。",
  avatarSrc: "/avatars/ysmtegsr.png",
  sources: [
    {
      title: 'Zenn.dev',
      username: "ysmtegsr",
      avatar: "/avatars/y.svg",
      url: "https://zenn.dev/ysmtegsr/feed",
      profileUrl: "https://zenn.dev/ysmtegsr",
      contents: "主に技術系の記事を投稿。学んだことや試したことなどをより多くの方の役に立てるよう書いていきます。"
    },
    {
      title: 'ブクログ',
      username: "ysmtegsr",
      avatar: "/avatars/booklog.png",
      url: "https://booklog.jp/users/ysmtegsr/feed/RSS1",
      profileUrl: "https://booklog.jp/users/ysmtegsr",
      contents: "ビジネス書を中心とした読書の記録。できる限り自分ごとに落とし込んで、感じたことなどをレビューに書きます。"
    },
    {
      title: '個人ブログ',
      avatar: "/avatars/blog.png",
      url: "https://blog.ysmtegsr.com/rss.xml",
      profileUrl: "https://ysmtegsr.com/",
      contents: "日々の雑記。関心事や思考の整理のため不定期で更新します。Jamstack なサイトを試すための検証用でもあります。"
    }
  ],
  twitterUsername: "ysmtegsr",
  githubUsername: "ysmtegsr",
  websiteUrl: "https://blog.ysmtegsr.com"
};
