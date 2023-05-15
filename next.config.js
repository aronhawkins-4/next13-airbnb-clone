/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            'res.cloudinary.com'
        ]
    },
    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "path": false,
          "os": false,
          "child_process": false
        }
      }
      return config
    },
}

module.exports = nextConfig
