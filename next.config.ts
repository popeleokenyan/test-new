import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // ✅ Allow only your Firebase Storage images to be optimized
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.royalmabati.com",
        pathname: "/**",
      },
    ],

    // ✅ Limit formats to a single efficient modern format to reduce transformations
    formats: ["image/avif", "image/webp"],

    // ✅ Adjust device sizes for your audience — assume typical responsive breakpoints
    deviceSizes: [320, 480, 640, 768, 1024, 1280],

    // ✅ Smaller thumbnails or inline images can use these pre-optimized sizes
    imageSizes: [16, 32, 48, 64, 96, 128],

    // ✅ Reduce unnecessary transformations by caching longer
    minimumCacheTTL: 2678400,
    unoptimized: true,
  },
};

export default nextConfig;
