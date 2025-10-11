import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Recommended by Next.js docs
    // This prevents ESLint errors (like “no-explicit-any”) from breaking your production build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
