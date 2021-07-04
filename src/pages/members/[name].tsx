import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { members } from '@members';
import { PostItem, Member } from '@src/types';
import { PostList } from '@src/components/PostList';
import { ContentWrapper } from '@src/components/ContentWrapper';
import { PageSEO } from '@src/components/PageSEO';
import {
  getMemberByName,
  getMemberPostsByName,
  getMemberPath,
} from '@src/utils/helper';
import Image from 'next/image';

type Props = {
  postItems: PostItem[];
  member: Member;
};

const Page: NextPage<Props> = (props) => {
  const { name, bio, avatarSrc, twitterUsername, githubUsername, websiteUrl } =
    props.member;

  return (
    <>
      <PageSEO title={name} path={getMemberPath(name)} />
      <section className="member">
        <ContentWrapper>
          <header className="member-header">
            <div className="member-header__avatar">
              <Image
                src={avatarSrc}
                alt={name}
                width={100}
                height={100}
                className="member-header__avatar-img"
              />
            </div>
            <h1 className="member-header__name">{name}</h1>
            <p className="member-header__bio">{bio}</p>
            <div className="member-header__links">
              {twitterUsername && (
                <a
                  href={`https://twitter.com/${twitterUsername}`}
                  className="member-header__link"
                >
                  <Image
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
                  className="member-header__link"
                >
                  <Image
                    src="/icons/github.svg"
                    alt={`GitHubのユーザー@${githubUsername}`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
              {websiteUrl && (
                <a href={websiteUrl} className="member-header__link">
                  <Image
                    src="/icons/link.svg"
                    alt={`ウェブサイトのリンク`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
            </div>
          </header>
        </ContentWrapper>
      </section>

      <section>
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">🔍Search Keywords</h2>
          </div>
          <a href="https://duckduckgo.com/?q=site%3Ayuchrszk.blogspot.com+%E7%B7%91%E8%8C%B6&ia=web">
            <span>🍵緑茶</span>
          </a>
        </ContentWrapper>
      </section>

      <section>
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">📚Articles</h2>
          </div>
          <div className="member-posts-container">
            <PostList items={props.postItems} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const name = params?.name as string;
  const member = getMemberByName(name);
  const postItems = getMemberPostsByName(name);

  if (!member) throw 'User not found';

  return {
    props: {
      member,
      postItems,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const memberNameList = members.map((member) =>
    encodeURIComponent(member.name)
  );
  const paths = memberNameList.map((name) => {
    return {
      params: {
        name,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Page;
