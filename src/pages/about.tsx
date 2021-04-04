import { NextPage, GetStaticProps } from "next";
import { Author } from "@src/types";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";
import { getAuthorData } from "@src/utils/helper";

type Props = {
  author: Author;
};

const Page: NextPage<Props> = (props) => {
  const {
    name,
    bio,
    avatarSrc,
    twitterUsername,
    githubUsername,
    websiteUrl
  } = props.author;

  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <header className="author-header">
            <div className="author-header__avatar">
              <img
                src={avatarSrc}
                alt={name}
                width={100}
                height={100}
                className="author-header__avatar-img"
              />
            </div>
            <h1 className="author-header__name">{name}</h1>
            <p className="author-header__bio">{bio}</p>
            <div className="author-header__links">
              {twitterUsername && (
                <a
                  href={`https://twitter.com/${twitterUsername}`}
                  className="author-header__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/twitter.svg"
                    alt={`Twitterのユーザー@${twitterUsername}`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
              {githubUsername && (
                <a
                  href={`https://github.com/${githubUsername}`}
                  className="author-header__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/github.svg"
                    alt={`GitHubのユーザー@${githubUsername}`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  className="author-header__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/link.svg"
                    alt={`ウェブサイトのリンク`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
            </div>
          </header>

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const author = getAuthorData();

  if (!author) throw "Author is not found";

  return {
    props: {
      author
    }
  };
};

export default Page;
