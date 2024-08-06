import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/de_DE/",
        destination: "/de_DE/startseite/",
        permanent: true,
      },
      {
        source: "/en_GB/",
        destination: "/en_GB/homepage/",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["partnerprod-media.e-spirit.cloud"]
  }
};

export default withNextIntl(nextConfig);
