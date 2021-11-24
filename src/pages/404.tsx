import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="404 not found" noindex={true} />

      <div className="error">
        <ContentWrapper>
          <div>
            <div className="error__status">お探しのページは見つかりませんでした。</div>
            <h1 className="error__message">URLをご確認ください。</h1>

            <nav className="error__actions">
              <LinkBackHome />
            </nav>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Page;
