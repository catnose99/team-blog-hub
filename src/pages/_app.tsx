import { AppProps } from "next/app";
import Head from "next/head";
import "@/src/styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon shortcut" href="/fixme.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
