import { AppProps } from "next/app";
import Head from "next/head";
import { config } from "@site.config";
import { SiteHeader } from "@src/components/SiteHeader";
import { SiteFooter } from "@src/components/SiteFooter";

import "@src/styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon shortcut"
          type="image/png"
          href={`${config.siteRoot}/logo.png`}
        />
      </Head>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}
