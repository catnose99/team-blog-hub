import { Member } from "@src/types";



export const members: Member[] = [
  {
    id: `taka`,
    name: "Taka Wakiyama",
    role: "Development",
    bio: "開発屋",
    avatarSrc: "/avatars/F8117FDF.png",
    sources: [],
    githubUsername: "TakaWakiyama",
  },
  {
    id: `caory`,
    name: "Caory Watanabe",
    role: "Tech CS",
    bio: `
    【LOVE】猫と酒と人と愛oT
    【JOB】「働くを楽しく」をMissionに掲げるsweeep株式会社のテクニカルサポート担当。
    仕組み化、効率化、自動化だいすき♡
    `,
    avatarSrc: "/avatars/caory.jpg",
    sources: [],
  },
  {
    id: "takayuki",
    name: "Takayuki.T#",
    role: "CS",
    bio: `百貨店社員歴やIT企業CS歴が長い、ただのおぢさんです。`,
    avatarSrc: "/avatars/pnfelpimqre.webp",
    sources: [],
  },
  {
    id: "sweeep",
    name: "sweeep株式会社(last)",
    role: "owner",
    bio: "公式",
    avatarSrc: "/logo_mark_square_radius.png",
    sources: [
      "https://note.com/sweeep_ai/rss",
    ],
    includeUrlRegex: "",
    twitterUsername: "",
    githubUsername: "",
    websiteUrl: "",
  },
  {
    id: `hirac`,
    name: "Kimihiro Hirashita",
    role: "CTO",
    bio: "雑草系CTO",
    avatarSrc: "/avatars/hirac.jpg",
    sources: [
       "https://zenn.dev/hirac/feed",
    ],
    githubUsername: "hirac1220",
  },
  {
    id: `yoshikawa`,
    name: "Tomoya Yoshikawa",
    role: "Engineer",
    bio: `頑張らないために頑張る.`,
    avatarSrc: "/avatars/yoshikawat64m.jpg",
    sources: [],
    githubUsername: "yoshikawat64m",
  },
  {
    id: `saki_imafuku`,
    name: "Saki Imafuku",
    role: "Development",
    bio: "元経理のエンジニア",
    avatarSrc: "/avatars/imafuku.jpg",
    sources: [
      "https://zenn.dev/saki/feed",
    ],
    githubUsername: "ImafukuSaki",
  },
  {
    id: `pechefamille`,
    name: "Hisako Isaka",
    role: "モバイルアプリリーダー",
    bio: "フリーランスでsweeepのモバイルアプリリーダーを担当しています",
    avatarSrc: "/avatars/pechefamille.jpeg",
    sources: [
      "https://zenn.dev/pechefamille/feed",
      "https://qiita.com/HisakoIsaka/feed",
    ],
    githubUsername: "pechefamille",
  },
];
