# Team Blog Hub

Forked by https://github.com/catnose99/team-blog-hub

![Demo](https://user-images.githubusercontent.com/34590683/96832331-8c289400-1479-11eb-9466-f24d30860a24.png)

企業/チームのためのブログ・スターターです。Forkしてご自由にお使いください。

ブログのRSSのURLを登録することで、チームメンバーの投稿を一覧にまとめて表示します。Zenn、Qiita、Medium、note、はてなブログなど、RSSフィードを取得できるサイトであれば、メンバーは好きな場所に投稿できます。

詳しくは下記の記事をご覧ください。

[チーム個々人のテックブログをRSSで集約するサイトを作った →](https://zenn.dev/catnose99/articles/cb72a73368a547756862)

## Demo

https://team-blog-hub.vercel.app

## Development

```bash
$npm install
$npm run build
$npm run dev
```

- サイトの基本設定は`site.config.ts`で行います。
- メンバーのプロフィールやRSSの登録は`members.ts`で行います。
- 配色を変更するには`src/styles/variables.scss`を書き換えます。
- ロゴなどの画像を変更するには`public`内のファイルを置き換えます。

その他、ご自由にコードを書き換えてください。

## Deployment

Firebase Hosting を利用しています。

```bash
$npm run build && npm run deploy
```

## Licence

MIT
