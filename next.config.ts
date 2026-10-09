import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: path.resolve(__dirname) },
  output: 'export',
  images: {
    // Static export has no Next.js image optimization server endpoint.
    unoptimized: true,
  },
};

export default nextConfig;
