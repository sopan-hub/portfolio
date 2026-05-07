
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      '6000-firebase-studio-1757078021811.cluster-52r6vzs3ujeoctkkxpjif3x34a.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
