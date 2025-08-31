import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'i.scdn.co',
        pathname: '/image/*',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
