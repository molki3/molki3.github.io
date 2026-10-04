import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder imagery is served from placehold.co as PNG (avoids dangerouslyAllowSVG).
    remotePatterns: [new URL("https://placehold.co/**")],
  },
};

export default nextConfig;
