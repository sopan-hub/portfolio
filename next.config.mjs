/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devIndicators: {
    appIsrStatus: false,
  },
  // Allow the cross-origin origin for the development environment
  experimental: {
    allowedDevOrigins: [
      '6000-firebase-studio-1757078021811.cluster-52r6vzs3ujeoctkkxpjif3x34a.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;