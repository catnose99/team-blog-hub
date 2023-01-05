# 3-shake Engineers' Blogs
Fork of https://github.com/catnose99/team-blog-hub

published at: https://blog.3-shake.com/
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

## 動作確認環境
NodeJS v16.19.0

```
Node.js v18以降の場合webpack周りのyarn buildでエラーが出ます
```
## Licence
MIT
