/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','www.solucionex.com', 'www.apollographql.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig
