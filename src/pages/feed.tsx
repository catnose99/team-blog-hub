import fs from "fs";
import { GetStaticProps } from "next";
import { Feed } from "feed";

import posts from "@.contents/posts.json";
import { PostItem } from "@src/types";
import { config } from "@site.config";

async function generatedRssFeed() {
  const baseUrl = config.siteMeta.siteUrl;
  const date = new Date();
  const author = {
    name: "Lisa Technologies Inc",
    email: "lisatech.dev@gmail.com",
    link: "https://lisatech.jp/",
  };

  const feed = new Feed({
    title: config.siteMeta.title,
    description: config.siteMeta.description,
    id: baseUrl,
    link: baseUrl,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    language: "ja",
    author,
  });

  const p = posts as PostItem[]; //無理やり変換
  p?.forEach((post) => {
    feed.addItem({
      title: post.title,
      description: post.contentSnippet ? post.contentSnippet : "",
      date: new Date(post.dateMiliSeconds),
      link: post.link,
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}

export const getStaticProps: GetStaticProps = async () => {
  generatedRssFeed();

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;
