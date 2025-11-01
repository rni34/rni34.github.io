import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/react-resume',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
