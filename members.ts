import { Member } from "@src/types";



export const members: Member[] = [
  /*{
    id: "",
    name: "",
    role: "",
    bio:
      "",
    avatarSrc: "",
    sources: [
      "",
      "",
    ],
    includeUrlRegex: "",
    twitterUsername: "",
    githubUsername: "",
    websiteUrl: "",
  },
  */
];

for (const _ of new Array(20)) {
  const rand = Math.floor(100000 * Math.random())
  const me: Member = {
      id: `taka`,
      name: "Taka Wakiyama",
      role: "Development",
      bio: "開発屋",
      avatarSrc: "/avatars/F8117FDF.png",
      sources: [],
      githubUsername: "TakaWakiyama",
  }
  members.push(me)
}
members[0].sources?.push("https://github.blog/category/engineering/feed/")
