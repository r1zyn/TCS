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
                destination: "https://discord.gg/vBGSP59TYc",
                permanent: true
            }
        ];
    }
};

module.exports = nextConfig;