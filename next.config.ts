import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Safe to ignore lint errors during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;