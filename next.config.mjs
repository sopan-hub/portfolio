/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  experimental: {
    allowedDevOrigins: [
      'https://6000-firebase-studio-1757078021811.cluster-52r6vzs3ujeoctkkxpjif3x34a.cloudworkstations.dev',
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
