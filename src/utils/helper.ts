import { PostItem } from "@src/types";
import { author } from "@author";
import posts from "@.contents/posts.json";

export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url?.hostname || "blog";
}
export function getFaviconSrcFromHostname(hostname: string) {
  return `https://www.google.com/s2/favicons?domain=${hostname}`;
}
export function getAuthorData() {
  return author
}
