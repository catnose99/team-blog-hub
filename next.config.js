const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? '/chompy-developers-blog' : '',
    trailingSlash: true
};