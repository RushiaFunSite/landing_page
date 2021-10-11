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
        fallbacks: {
            video: '/rushia_gif.m3u8',
            video: '/rushia_gif.mp4',
            video: '/rushia_gif.webm',
        },
    },
};

module.exports = withPWA(config);
