import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./messages/en-GB.json",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "monday-dev-caas-api.e-spirit.cloud",
      },
      {
        protocol: "https",
        hostname: "partnerprod-media.e-spirit.cloud",
      },
      { protocol: "https", hostname: "maps.googleapis.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
