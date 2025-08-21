import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true // disables Vercel's Image Optimization
  }
};

export default nextConfig;
