import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { ContentWrapper } from "@src/components/ContentWrapper";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              このサイトはチームのためのブログスターター 「
              <a href="https://github.com/catnose99/team-blog-root">
                Team Blog Root
              </a>
              」
              のデモです。ブログのRSSのURLを登録することで、チームメンバーの投稿を一覧にまとめて表示します。
            </p>
            <p>
              Medium、note、Zenn、Qiita、はてなブログなど、RSSフィードを取得できるサイトであれば、メンバーは好きな場所に投稿できます。
            </p>
            <p>
              詳しくは「
              <a href="https://zenn.dev/catnose99/articles/cb72a73368a547756862">
                メンバーのテックブログをRSSで集約するサイトを作った
              </a>
              」をご覧ください。
            </p>
          </div>
          <div className="about__actions">
            <Link href="/" passHref>
              <a className="about__home-button">Back Home</a>
            </Link>
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
