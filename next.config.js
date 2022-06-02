const isProd = process.env.NODE_ENV === "production";

module.exports = {
    basePath: isProd ? "/chompy-developers-blog" : "",
    assetPrefix: isProd ? "/chompy-developers-blog/" : "",
    trailingSlash: true
};