import { NextPage } from "next";
import Link from "next/link";

import posts from "@.contents/posts.json";
import { config } from "@site.config";
import { PostItem } from "@src/types";
import { ScrollableMembers } from "@src/components/ScrollableMembers";
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
        <div className="home-hero__title_area"> 
          <h1 className="home-hero__title">{config.siteMeta.title}</h1>
        </div>
        <div className="home-hero__description_area">
          <ContentWrapper>
            {!!config.siteMeta.description && (
              <div className="home-hero__description">
                <p>
                  ネクストスケープの社員が書いた技術ブログをリストアップしました。
                </p>
                <p>
                  エンジニア達は日々技術に磨きをかけ、得た知識を共有することで、業界にも貢献しています。
                </p>
              </div>
            )}
          </ContentWrapper>
        </div>
      </section>

      <section className="home-members">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">ブログ一覧</h2>
            <Link href="/members">
              <a className="home-section-link">詳細 →</a>
            </Link>
          </div>

          <div className="home-members-container">
            <UndoWrapForScroll>
              <ScrollableMembers />
            </UndoWrapForScroll>
          </div>
        </ContentWrapper>
      </section>

      <section className="home-posts">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">最新記事一覧</h2>
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
