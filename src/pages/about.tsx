import { NextPage, GetStaticProps } from "next";
import { Author, Source } from "@src/types";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";
import {
  getAuthorData,
  getHostFromURL,
  getFaviconSrcFromHostname
} from "@src/utils/helper";

type Props = {
  author: Author;
};

const Page: NextPage<Props> = (props) => {
  const {
    name,
    bio,
    avatarSrc,
    sources,
    twitterUsername,
    githubUsername,
    websiteUrl
  } = props.author;

  const sites = sources.map((source: Source, i: number) => {
    const hostname = getHostFromURL(source.url);
    const faviconUrl = getFaviconSrcFromHostname(hostname)

    return (
      <a
        className="about__body__sources__item"
        key={i}
        href={`https://${hostname}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <img
            src={faviconUrl}
            alt={source.title}
            height={18}
            width={18}
          />
          <span>{source.title}</span>
        </div>
        <p>{source.contents}</p>
      </a>
    );
  });

  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
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

        <section className="about">
          <h2 className="about__title">プロフィール</h2>
          <div className="about__body">
            <p>
              福岡県福岡市在住。業務ではバックエンド、フロントエンドの設計から実装を中心に行っています。クラウドは AWS が好きで、最近（ 2021 年 3 月 ）AWS 認定ソリューションアーキテクト - アソシエイト - を取得しました。
            </p>
            <p>
              領域としては、AWS 環境における設計から構築、Infrastructure as Code や Jamstack といったものに興味があります。今後もそういったお仕事を通して、技術を用いた課題解決をできたらと思っています。
            </p>
          </div>
        </section>

        <section className="about">
          <h2 className="about__title">このサイトについて</h2>
          <div className="about__body">
            <h3>技術スタック</h3>
            <p>このサイトでは、下記の技術を使っています。</p>
            <ul>
              <li>Next.js (SSG)</li>
              <li>TypeScript</li>
              <li>Netlify</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
          <div className="about__body">
            <h3>データ取得元</h3>
            <p>
              下記のサイトの RSS フィードを購読して動的にデータを取得しています。データは 1 日に 2 回最新化されます。
            </p>
            <div className="about__body__sources">{sites}</div>
          </div>
        </section>

        <section className="about">
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
