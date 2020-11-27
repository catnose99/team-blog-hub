# Minedia Team Blog Hub

![Demo](https://user-images.githubusercontent.com/98103/100419296-a3d1e880-30c7-11eb-8186-714115ea7547.png)


ブログのRSSのURLを登録することで、チームメンバーの投稿を一覧にまとめて表示します。Zenn、Qiita、Medium、note、はてなブログなど、RSSフィードを取得できるサイトであれば、メンバーは好きな場所に投稿できます。

## Published URL

https://minedia-engineer-hub.vercel.app/

## Development
```bash
$ yarn install
$ yarn build
$ yarn dev
```

- サイトの基本設定は`site.config.ts`で行います。
- メンバーのプロフィールやRSSの登録は`members.ts`で行います。
- 配色を変更するには`src/styles/variables.scss`を書き換えます。
- ロゴなどの画像を変更するには`public`内のファイルを置き換えます。

## Deployment

- Vercelでホスティング,CDしています。
- 1日に1回などの頻度で自動デプロイを設定予定。

## Licence
MIT


## Forked from

https://github.com/catnose99/team-blog-hub
