import { PostItem } from "@src/types";
import { members } from "@members";
import posts from "@.contents/posts.json";

export function getMemberByName(name: string) {
  const formattedName = convertMemberNameToPath(name)
  return members.find((member) => convertMemberNameToPath(member.name) === formattedName);
}
export function getMemberPostsByName(name: string) {
  const formattedName = convertMemberNameToPath(name)
  return (posts as PostItem[]).filter((item) => convertMemberNameToPath(item.authorName) === formattedName);
}
export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url?.hostname || "blog";
}
export function getFaviconSrcFromHostname(hostname: string) {
  return `https://www.google.com/s2/favicons?domain=${hostname}`;
}
export function getMemberPath(name: string) {
  return `/members/${convertMemberNameToPath(name)}`;
}

export function convertMemberNameToPath(name: string) {
  return encodeURIComponent(name).replace(/%20/, '-').toLocaleLowerCase()
}