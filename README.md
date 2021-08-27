# Ubie Engineers' Blogs

Fork of https://github.com/catnose99/team-blog-hub

published at: https://blog.ubie.tech/

## Development

```bash
$ yarn install
$ yarn build
$ yarn dev
```

## How to add a member

- members.ts

```typescript
  {
      // urlに使うので半角英数字にしてください。
    id: "empitsu",
    nickname: "えんぴつ",
    realName: "empitsu",
    bio: "フロントエンドが得意です。1児の母。",
      // 正方形の画像を指定する。なるべく500px x 500px以内にしてください。
    avatarSrc: "/avatars/empitsu.jpeg",
      // rss sourcesは複数指定可能。
    sources: ["https://note.com/empitsu88/rss", "https://zenn.dev/empitsu88/feed", "https://qiita.com/empitsu88/feed"],
      // github, twitterアカウント, websiteUrlはoptionalです。不要な場合はkeyごと削除して下さい。
    githubUsername: "empitsu",
    twitterUsername: "empitsu88",
    websiteUrl: "https://empitsu88.hatenablog.com/entry/myprofile",
  },
```

正規表現で一部の記事のみ含めたり、除外することもできます。詳しくは[こちら](https://zenn.dev/catnose99/articles/cb72a73368a547756862#%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%8F%BE%E3%81%A7%E4%B8%80%E9%83%A8%E3%81%AE%E8%A8%98%E4%BA%8B%E3%82%92%E9%99%A4%E5%A4%96%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB)


## Licence

MIT
