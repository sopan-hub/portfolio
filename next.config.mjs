/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      '*.cloudworkstations.dev',
      '*.firebase-studio.google',
    ],
  },
};

export default nextConfig;
