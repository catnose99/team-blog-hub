# Lisa’s Output Hub
Lisaの開発ブログ。RSSで各メンバーやLisaのZennアカウントの投稿を集約する。開発メンバー以外の人の投稿も歓迎で、あえてタイトルにTechとは入れていない。
<img width="1440" alt="Screen Shot 2021-11-10 at 8 36 45" src="https://user-images.githubusercontent.com/51704330/141022877-5a22fafa-29ef-4d9c-beda-1058c6b0220e.png">

TODO: CI状況やビルド状況のバッジを掲載

## 技術スタック
- Next.js
- TypeScript
- Vercel

## ディレクトリ構成
```
├── README.md
├── members.ts
├── next-env.d.ts
├── package.json
├── public
├── site.config.ts
├── src
│   ├── builder
│   ├── components
│   ├── pages
│   ├── styles
│   ├── types.ts
│   └── utils
├── tsconfig.builder.json
├── tsconfig.json
└── yarn.lock
```

## Installation
```
git clone https://github.com/Lisa-Technologies/team-blog-hub.git
```
プロジェクトルートに移動して
```
yarn install
```

## Usage
```
yarn build
yarn dev
```

## 新規メンバー追加のやり方
mainからnew/[member_name]というブランチを切り、PRを投げてください。
`members.ts`の中の`members`に新しいオブジェクトを追加します。Memberオブジェクトの型は以下のようになっています。
```ts
export type Member = {
  id: string; // 個別メンバーページのpath 小文字でfirstName+familyName
  name: string; // ”FirstName FamilyName”
  avatarSrc: string; // /public/avatarsに画像を追加し、画像名を指定
  role?: typeof roles[number]; // 役職。 /src/typesの変数rolesの中から選ぶ
  bio?: string; //　自己紹介
  sources?: string[]; // Feed URL
  includeUrlRegex?: string; // 
  excludeUrlRegex?: string; // 
  githubUsername?: string; //　GitHubの＠以下
  twitterUsername?: string; //　Twitterの＠以下
  websiteUrl?: string; // ポートフォリオサイトのリンク等
};
```
他のオブジェクトを参考にしながら、新しいメンバーのデータを追加してください。
もしもrolesに適当な役職が見当たらなかったら、新たにroleを追加してください。

## 既存メンバー編集のやり方
mainからedit/[member_name]というブランチを切り、PRを投げてください。
該当するMemberオブジェクトを適宜編集してください。
