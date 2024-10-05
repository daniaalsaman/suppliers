/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'doshtu-app.com',
                // hostname: 'stage.doshtu-app.com',
                port: '',
                pathname: '',
                // domains: ['stage.doshtu-app.com'],
            },
        ],
    },
}

module.exports = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
}
