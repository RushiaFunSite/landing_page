/** @type {import('next').NextConfig} */

const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const config = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
};

module.exports = withPWA(config);
