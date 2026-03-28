import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /** Silence lockfile root warning when a parent folder has another package-lock.json */
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
