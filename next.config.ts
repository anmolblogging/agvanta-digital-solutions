import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "agvanta.in",
      },
      {
        protocol: "https",
        hostname: "wp.agvanta.in",
      },
    ],
  },
};

export default nextConfig;