/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pm-s3-images-new.s3.ap-south-1.amazonaws.com/public",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
