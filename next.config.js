/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shot.screenshotapi.net',
        pathname: '/screenshot/**',
      },
    ],
  },
}

module.exports = nextConfig
