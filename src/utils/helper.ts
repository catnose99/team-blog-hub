import { PostItem } from "@src/types";
import { members } from "@members";
import posts from "@.contents/posts.json";

export function getMemberByName(name: string) {
  return members.find((member) => member.name === name);
}

export function getMemberById(id: string) {
  return members.find((member) => member.id === id);
}

export function getMemberPostsById(id: string) {
  return (posts as PostItem[]).filter((item) => item.authorId === id);
}
export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url?.hostname || "blog";
}
export function getFaviconSrcFromHostname(hostname: string) {
  return `https://www.google.com/s2/favicons?domain=${hostname}`;
}
export function getMemberPath(id: string) {
  return `/members/${encodeURIComponent(id)}`;
}
