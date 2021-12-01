import Head from "next/head";

import { config } from "@site.config";
// import { url } from "@src/utils/url";

// types
type Props = {
  title: string;
  path?: string;
  description?: string;
  ogImageUrl?: string;
  noindex?: boolean;
  removeSiteNameFromTitle?: boolean;
};

export const PageSEO: React.FC<Props> = (props) => {
  const {
    path,
    title,
    description,
    ogImageUrl,
    noindex,
    removeSiteNameFromTitle,
  } = props;

  const pageUrl = `${config.siteRoot}${path || ""}`;
  const defaultOgImgUrl = `${config.siteRoot}/og.png`;

  return (
    <Head>
      <title>
        {removeSiteNameFromTitle
          ? title
          : `${title} | ${config.siteMeta.title}`}
      </title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site" content={config.siteMeta.title} />
      <meta property="og:image" content={ogImageUrl || defaultOgImgUrl} />
      {!!description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {path && <link rel="canonical" href={pageUrl} />}
      {noindex && <meta name="robots" content="noindex" />}
    </Head>
  );
};
