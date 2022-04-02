/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (isProd) {
      return {
        "/micro-interactions/stepper": { page: "/micro-interactions/[interactionName]" },
        "/micro-interactions/highlights": { page: "/micro-interactions/[interactionName]" },
        "/micro-interactions/animatedCounter": { page: "/micro-interactions/[interactionName]" },
        "/micro-interactions/animateOpen": { page: "/micro-interactions/[interactionName]" },
        "/micro-interactions/needHelp": { page: "/micro-interactions/[interactionName]" },
      };
    }
  },
};

module.exports = nextConfig;
