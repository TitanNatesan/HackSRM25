/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'titandev.me',
            },
            {
                protocol: 'http',
                hostname: '10.1.7.17',
            },
            {
                protocol: 'https',
                hostname: 'robohash.org',
            },
        ], // Add both 'localhost' and 'titandev.me' or any other domain as needed
    },
    webpack: (config, { dev }) => {
        if (dev) {
            // Disable Webpack caching in development to prevent caching issues
            config.cache = false;
        }
        return config;
    },
};

export default nextConfig;