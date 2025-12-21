import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://cardiomlfastapi.vercel.app/:path*", // Your Backend URL
      },
    ];
  },
};

export default nextConfig;
