const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
};
