const urlPrefix = process.env.NODE_ENV === "production" ? '/chompy-developers-blog' : ''

module.exports = {
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true
};