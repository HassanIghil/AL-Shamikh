import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Next.js checks cross-origin dev asset requests against this hostname only.
  // Keep the LAN exception development-only; it does not affect production.
  allowedDevOrigins: ['192.168.56.1'],
  turbopack: { root: path.resolve(__dirname) },
  // Static export is the production target for Cloudflare Pages. Leaving this
  // unset in dev lets unknown dynamic slugs reach the app's not-found page.
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' as const } : {}),
  images: {
    // Static export has no Next.js image optimization server endpoint.
    unoptimized: true,
  },
};

export default nextConfig;
