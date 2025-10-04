/** @type {import('next').NextConfig} */
/*when image is hosted somewhere else*/
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "'/*https*/",
        port: "",
        pathname: "",
      },
    ],
  },
};

export default nextConfig;
