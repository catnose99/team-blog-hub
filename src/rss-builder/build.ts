import fs from "fs-extra";
import Parser from "rss-parser";
import { members } from "../../members";
import { PostItem, Member } from "../types";
export default {};

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
};

const parser = new Parser();
let allPostItems: PostItem[] = [];

async function fetchFeedItems(url: string) {
  const feed = await parser.parseURL(url);
  if (!feed?.items?.length) return [];

  // return item which has title and link
  return feed.items
    .map(({ title, contentSnippet, link, isoDate }) => {
      return {
        title,
        contentSnippet: contentSnippet?.replace(/\n/g, ""),
        link,
        isoDate,
      };
    })
    .filter(({ title, link }) => title && link) as FeedItem[];
}

async function getFeedItemsFromSources(sources: undefined | string[]) {
  if (!sources?.length) return [];
  let feedItems: FeedItem[] = [];
  for (const url of sources) {
    const items = await fetchFeedItems(url);
    if (items) feedItems = [...feedItems, ...items];
  }
  return feedItems;
}

async function getMemberFeedItems(member: Member): Promise<PostItem[]> {
  const feedItems = await getFeedItemsFromSources(member.sources);
  if (!feedItems) return [];

  return feedItems.map((item) => {
    return {
      ...item,
      authorName: member.name,
    };
  });
}

(async function () {
  for (const member of members) {
    const items = await getMemberFeedItems(member);
    if (items) allPostItems = [...allPostItems, ...items];
  }
  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/posts.json", allPostItems);
})();
