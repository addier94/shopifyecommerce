/** 
 * @type {import('next').NextConfig} 
 **/
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
};

console.log('next.config.js', JSON.stringify(module.exports, null, 2))