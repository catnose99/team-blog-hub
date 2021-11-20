import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "lufeee",
    name: "lufe",
    role: "Manager",
    bio: "セキュリティについてかんばります。",
    avatarSrc: "/avatars/lufe.jpg",
    sources: [
      "https://zenn.dev/lufe/feed",
      "https://lufe.hatenablog.com/rss",
    ]
  },
  {
    id: "nishi",
    name: "Nishi",
    role: "Member",
    bio: "CTF初心者。サイバーセキュリティに興味があります。",
    avatarSrc: "/avatars/nishi.png",
    sources: [
      "https://zenn.dev/nishi/feed",
    ]
  },
  {
    id: "ny-a",
    name: "Nyaarch64",
    role: "Member",
    bio: "継続していきたいです。",
    avatarSrc: "/avatars/ny-a.jpg",
    sources: [
      "https://zenn.dev/ny_a/feed",
    ]
  },
];
