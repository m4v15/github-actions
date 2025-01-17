/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.BUILD_DIR,
  reactStrictMode: true,
};

export default nextConfig;
