import { NextPage } from "next";
import Link from "next/link";

import posts from "@.contents/posts.json";
import { config } from "@site.config";
import { PostItem } from "@src/types";
import { PostList } from "@src/components/PostList";
import { PageSEO } from "@src/components/PageSEO";
import {
  ContentWrapper,
  UndoWrapForScroll,
} from "@src/components/ContentWrapper";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO
        title={config.siteMeta.title}
        description={config.siteMeta.description}
        path="/"
        removeSiteNameFromTitle={true}
      />

      <section className="home-hero">
        <ContentWrapper>
          <h1 className="home-hero__title">{config.siteMeta.title}</h1>
          <p className="home-hero__description">
            こんにちは、ヨッシーです 👋 <br />福岡県在住のソフトウェアエンジニアです。
          </p>
          <p>
            このサイトは、「企業/チームのためのブログ・スターター
            <a
              href="https://github.com/catnose99/team-blog-hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Team Blog Hub
            </a> 」をカスタマイズし、各サービスでのアウトプットを集約して閲覧できるようにしたものです。
          </p>
          <p>技術を用いた課題解決が大好きなので、蓄えた知識をいろんな場所で発信するように心がけています。</p>
        </ContentWrapper>
      </section>

      <section className="home-posts">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">Articles</h2>
          </div>

          <div className="home-posts-container">
            <PostList items={posts as PostItem[]} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default Page;
