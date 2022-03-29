import { AppProps } from "next/app";
import { SiteHeader } from "@src/components/SiteHeader";
import { SiteFooter } from "@src/components/SiteFooter";

import "@src/styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}
