# Chompy Developers Blog

Fork of https://github.com/catnose99/team-blog-hub

published at: https://xxxx/

## Demo
https://team-blog-hub.vercel.app

## Setting
- サイトの基本設定は`site.config.ts`で行います。
- 配色を変更するには`src/styles/variables.scss`を書き換えます。
- ロゴなどの画像を変更するには`public`内のファイルを置き換えます。

### Setting Member

- メンバーのプロフィールやRSSの登録は`members.ts`で行います。

```
[{
  id: "id"
  name: "メンバーの名前",
  role: "役職名",
  bio:　"自己紹介文"
  avatarSrc: "アイコン画像のパス"
  sources: [
    "RSSのURL",
  ],
  includeUrlRegex: "含めたい記事のURLにマッチする正規表現",
  excludeUrlRegex: "除きたい記事のURLにマッチする正規表現"
  twitterUsername: "twitterのユーザー名",
  githubUsername: "githubのユーザー名",
  websiteUrl: "自身の運営するURL",
}]
```

## Development
```bash
$ yarn install
$ yarn build
$ yarn dev
```

## 参考
[チーム個々人のテックブログをRSSで集約するサイトを作った →](https://zenn.dev/catnose99/articles/cb72a73368a547756862)

[Ubieエンジニアのブログ記事まとめサイト「Ubie Engineers' Blogs」を公開しました｜Ubie (ユビー)｜note](https://note.com/ubie/n/n54c7628383ee)