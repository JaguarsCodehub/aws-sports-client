/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
  },
  assetPrefix: '/',
  basePath: '',
  trailingSlash: true,
};

export default nextConfig;
