/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.twitter.com','scontent.fkut1-1.fna.fbcdn.net']
  }
}

module.exports = nextConfig
