import { NextPage, GetStaticProps } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from '@/src/components/PageSEO';
import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import gfm from 'remark-gfm';

type Props = {
  title: string;
  description: string;
  date: string;
  content: string;
}

export const Page: NextPage<Props> = (props) => {
  const { title, description, date, content } = { ...props };

  return (
    <>
      <PageSEO title={title} description={description} path="/resume" />
      <ContentWrapper className="resume">
        <header className="resume__header">
          <h1 className="resume__header__title">{title}</h1>
          <span className="resume__header__date">最終更新日：{date}</span>
        </header>
        
        <section className="resume__body">
          <ReactMarkdown plugins={[gfm]} skipHtml={true}>{content}</ReactMarkdown>
        </section>

        <section className="resume__action">
          <div className="resume__action__btn">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const markdown = fs.readFileSync(process.cwd() + '/docs/resume.md', 'utf8')
  const md = matter(markdown)
  return {
    props: {
      title: md.data.title,
      description: md.excerpt,
      date: md.data.date,
      content: md.content
    }
  };
};

export default Page;
