/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  eslint: {
    ignoreDuringBuilds: true,

  },

  typescript: {

    ignoreBuildErrors: true,

  },
  images: {
    unoptimized: true
},
experimental: {
  appDir: true,
},
}

module.exports = nextConfig
