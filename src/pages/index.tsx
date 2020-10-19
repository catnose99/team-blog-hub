import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { SiteHeader } from "@/src/components/SiteHeader";

type Props = {};

const Page: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Company Tech Blog</title>
      </Head>
      <SiteHeader />
      <div></div>
      <div>Hello</div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {},
  };
};

export default Page;
