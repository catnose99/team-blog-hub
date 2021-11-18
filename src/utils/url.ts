// gh-pagesで公開するときに、public以下のファイルを正しく参照するための補助関数
import getConfig from "next/config";

export function url(filename: string): string {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { urlPrefix: string };
  };
  return publicRuntimeConfig.urlPrefix + filename;
}
