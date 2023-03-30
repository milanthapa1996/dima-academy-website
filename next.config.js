/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com", "cdn.sanity.io","avatars.githubusercontent.com","picsum.photos","images.unsplash.com","plus.unsplash.com"],
  },
}

module.exports = nextConfig
