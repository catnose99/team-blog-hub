import { Member } from "@src/types";

export const members: Member[] = [
  {
    nickname: "たろう",
    realName: "長澤太郎",
    bio: "Kotlinの人だけど、いろいろやってるよ！",
    avatarSrc: "/avatars/taro.jpg",
    sources: ["https://taro.hatenablog.jp/feed"],
    includeUrlRegex: "taro.hatenablog.jp",
    twitterUsername: "ngsw_taro",
    githubUsername: "ngsw_taro",
    websiteUrl: "https://taro.hatenablog.jp/",
  },
  {
    nickname: "たつろろ",
    realName: "中村達郎",
    bio: "Webフロントエンドが得意です。福岡在住",
    avatarSrc: "/avatars/tatsuroro.jpg",
    sources: ["https://tatsuroro.hateblo.jp/feed"],
    includeUrlRegex: "tatsuroro.hateblo.jp",
    twitterUsername: "tatsuroro",
    githubUsername: "tatsuroro",
    websiteUrl: "https://tatsuroro.hateblo.jp/",
  },
  {
    nickname: "しらじ",
    realName: "磯貝佳典",
    bio: "家紋アイコンしらじです。フロント、バックエンドやってます",
    avatarSrc: "/avatars/shiraji.png",
    sources: ["https://shiraji.hatenablog.com/feed"],
    includeUrlRegex: "shiraji.hatenablog.com",
    twitterUsername: "shiraj_i",
    githubUsername: "shiraji",
    websiteUrl: "https://shiraji.hatenablog.com",
  },
].sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
