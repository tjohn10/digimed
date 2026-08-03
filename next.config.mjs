/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Unique build ID on every deploy so old cached chunks never conflict
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

export default nextConfig;
