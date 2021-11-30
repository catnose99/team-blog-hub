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
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🌈</text></svg>"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Lisa's Output Hub"
          href={`${config.siteMeta.siteUrl}/rss/feed.xml`}
        />
      </Head>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}
