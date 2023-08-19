/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["iili.io", "cdn-cms.pgimgs.com", "www.king-adventure.com", "piknikasik.com", "jastitahn.files.wordpress.com", "jabarekspres.com", "wisato.id", "blogger.googleusercontent.com", "getlost.id", "asset-2.tstatic.net"],
  },
};

module.exports = nextConfig;
