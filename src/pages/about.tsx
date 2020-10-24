import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              このサイトはチームのためのブログスターター
              <a href="https://github.com/catnose99/team-blog-hub">
                Team Blog Hub
              </a>
              のデモです。ブログのRSSのURLを登録することで、チームメンバーの投稿を一覧にまとめて表示します。
            </p>
            <p>
              Medium、note、Zenn、Qiita、はてなブログなど、RSSフィードを取得できるサイトであれば、メンバーは好きな場所に投稿できます。
            </p>
            <p>
              詳しくは
              <a href="https://zenn.dev/catnose99/articles/cb72a73368a547756862">
                チーム個々人のテックブログをRSSで集約するサイトをNext.jsで作った
              </a>
              をご覧ください。
            </p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
