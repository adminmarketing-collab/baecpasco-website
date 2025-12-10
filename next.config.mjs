/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'adminmarketing-collab.github.io',
          pathname: '/**', // Allow all paths (or narrow it down if you prefer)
        },
      ],
    },
  };
  

export default nextConfig;
