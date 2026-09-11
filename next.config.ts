import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/tml-ondersteunt-tennisverenigingen", destination: "/verenigingen", permanent: true },
      { source: "/tml-tenniskamp", destination: "/tenniskamp-2026", permanent: true },
      { source: "/onze-diensten/detachering-tennisleraren", destination: "/diensten/detachering-tennistrainers", permanent: true },
      { source: "/onze-diensten/detachering-tennistrainers", destination: "/diensten/detachering-tennistrainers", permanent: true },
      { source: "/onze-diensten/detachering-padelleraren", destination: "/diensten/detachering-padeltrainers", permanent: true },
      { source: "/onze-diensten/detachering-padeltrainers", destination: "/diensten/detachering-padeltrainers", permanent: true },
      { source: "/onze-diensten/advies-management-verenigingen", destination: "/diensten/advies-management-verenigingen", permanent: true },
      { source: "/onze-diensten/tennisclinics", destination: "/diensten/tennisclinics", permanent: true },
      { source: "/schooltennis", destination: "/diensten/schooltennis", permanent: true },
      { source: "/onze-diensten/schooltennis", destination: "/diensten/schooltennis", permanent: true },
      { source: "/onze-diensten/ondersteuning-bij-open-dagen", destination: "/diensten/ondersteuning-open-dagen", permanent: true },
      { source: "/onze-diensten/organisatie-van-tenniskampen", destination: "/diensten/tenniskampen", permanent: true },
      { source: "/onze-diensten/organisatie-van-tennisreizen", destination: "/diensten/tennisreizen", permanent: true },
    ];
  },
};

export default nextConfig;
