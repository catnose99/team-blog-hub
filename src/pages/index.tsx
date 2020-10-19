import { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import Head from "next/head";

import { siteMeta } from "@/site-config.json";

import {
  ContentWrapper,
  UndoWrapForScroll,
} from "@src/components/ContentWrapper";
import { SiteHeader } from "@/src/components/SiteHeader";
import { ScrollableMembers } from "@src/components/ScrollableMembers";

type Props = {};

const Page: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Company Tech Blog</title>
      </Head>

      <SiteHeader />

      <section className="home-hero">
        <ContentWrapper>
          <h1 className="home-hero__title">{siteMeta.title}</h1>
          {!!siteMeta.description && (
            <p className="home-hero__description">{siteMeta.description}</p>
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

          <div className="home-posts-container"></div>
        </ContentWrapper>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {},
  };
};

export default Page;
