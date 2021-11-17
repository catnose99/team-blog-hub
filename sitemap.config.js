import { config } from "@site.config";

module.exports = {
  siteUrl: config.siteMeta.siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "./out",
};
