// Enable Less support using next-with-less while preserving existing config
// Note: Keeps config minimal and readable.
const withLess = require('next-with-less');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Less config kept lightweight; additional variables can be added later
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
};

module.exports = withLess(nextConfig);
