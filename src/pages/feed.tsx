import { GetServerSidePropsContext } from "next";
import RSS from "rss";

import posts from "@.contents/posts.json";
import { PostItem } from "@src/types";
import { config } from "@site.config";

async function generateFeedXml() {
  const feed = new RSS({
    title: config.siteMeta.title,
    description: config.siteMeta.description,
    site_url: "https://lisa.vercel.app",
    feed_url: "https://lisa.vercel.app/feed",
    language: "ja",
  });

  const p = posts as PostItem[]; //無理やり変換
  p?.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.contentSnippet ? post.contentSnippet : "",
      date: new Date(post.dateMiliSeconds),
      url: post.link,
    });
  });

  // XML形式の文字列にする
  return feed.xml();
}

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateFeedXml(); // フィードのXMLを生成する（後述）

  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間キャッシュする
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;
