import { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import Head from "next/head";

import { config } from "@site.config";
import { PostItem } from "@src/types";

import {
  ContentWrapper,
  UndoWrapForScroll,
} from "@src/components/ContentWrapper";
import { SiteHeader } from "@src/components/SiteHeader";
import { ScrollableMembers } from "@src/components/ScrollableMembers";
import { PostList } from "@src/components/PostList";
import posts from "@/.contents/posts.json";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Company Tech Blog</title>
      </Head>

      <SiteHeader />

      <section className="home-hero">
        <ContentWrapper>
          <h1 className="home-hero__title">{config.siteMeta.title}</h1>
          {!!config.siteMeta.description && (
            <p className="home-hero__description">
              {config.siteMeta.description}
            </p>
          )}
        </ContentWrapper>
      </section>

      <section className="home-members">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">Members</h2>
            <Link href="/members">
              <a className="home-section-link">See Details →</a>
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
