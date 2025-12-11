/** @type {import('next').NextConfig} */
/*when image is hosted somewhere else*/
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/birds/**",
      },
    ],
  },
};

export default nextConfig;
