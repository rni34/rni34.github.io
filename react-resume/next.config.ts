import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/react-resume', // Commented out for local dev
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
