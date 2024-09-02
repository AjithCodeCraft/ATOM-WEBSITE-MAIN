/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['upload.wikimedia.org'], // Allow images from this domain
    },
  };
  
  export default nextConfig;
  