/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com","plus.unsplash.com","firebasestorage.googleapis.com","picsum.photos"],
  },
}

module.exports = nextConfig
