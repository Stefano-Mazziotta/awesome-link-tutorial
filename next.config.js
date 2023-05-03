/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','www.solucionex.com', 'www.apollographql.com', 'via.placeholder.com', 'lh3.googleusercontent.com',  's.gravatar.com' ],
  },
}

module.exports = nextConfig
