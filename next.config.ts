import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ejemplo.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;