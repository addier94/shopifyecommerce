const { withFrameworkConfig } = require('./framework/common/config');

/** 
 * @type {import('next').NextConfig} 
 **/
module.exports = withFrameworkConfig({
  framework: {
    name: "shopify_local"
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});

console.log('next.config.js', JSON.stringify(module.exports, null, 2))