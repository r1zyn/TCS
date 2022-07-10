/**
 * Next.js configuration options.
 * @type {import("next").NextConfig} 
 * 
 */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/discord",
                destination: "",
                permanent: true
            }
        ];
    }
};

module.exports = nextConfig;
