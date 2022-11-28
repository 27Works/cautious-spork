/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "noble-rot-api.27.works",
      },
    ],
  },
};

module.exports = nextConfig;
