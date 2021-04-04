import fs from "fs-extra";
import Parser from "rss-parser";
import { author } from "../../author";
import { PostItem, Author, Source } from "../types";
export default {};

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
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
        dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
      };
    })
    .filter(({ title, link }) =>  title && link ) as FeedItem[];
}

async function getFeedItemsFromSources(sources: Source[]) {
  let feedItems: FeedItem[] = [];
  for (const source of sources) {
    const items = await fetchFeedItems(source.url);
    if (items) feedItems = [...feedItems, ...items];
  }
  return feedItems;
}

async function getFeedItems(author: Author): Promise<PostItem[]> {
  const { sources, name } = author;
  const feedItems = await getFeedItemsFromSources(sources);
  if (!feedItems) return [];

  let postItems = feedItems.map((item) => {
    return {
      ...item,
      authorName: name,
    };
  });

  return postItems;
}

(async function () {
  const allPostItems = await getFeedItems(author);
  allPostItems.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);
  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/posts.json", allPostItems);
})();
