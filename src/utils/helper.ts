import { PostItem } from "@src/types";
import { members } from "@members";
import posts from "@/.contents/posts.json";

export function getMemberByName(name: string) {
  return members.find((member) => member.name === name);
}
export function getMemberPostsByName(name: string) {
  return (posts as PostItem[]).filter((item) => item.authorName === name);
}
export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url?.hostname || "blog";
}
export function getFaviconSrcFromHostname(hostname: string) {
  return `http://www.google.com/s2/favicons?domain=${hostname}`;
}
