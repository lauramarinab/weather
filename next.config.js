/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};

module.exports = nextConfig;
