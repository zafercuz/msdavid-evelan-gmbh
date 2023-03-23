/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['reqres.in'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/users',
      },
    ]
  },
}

module.exports = nextConfig
