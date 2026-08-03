/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Ensure old static chunks are not retained between deployments
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

export default nextConfig;
