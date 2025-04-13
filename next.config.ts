import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'old-images.hb.ru-msk.vkcs.*'
    //   }
    // ],
    domains: ['old-images.hb.ru-msk.vkcs.cloud', 'old-images.hb.ru-msk.vkcs.cloudhttp']
  },
};

export default nextConfig;
