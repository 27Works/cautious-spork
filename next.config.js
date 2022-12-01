/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = nextConfig

module.exports = {
	env: {
		TOKEN: process.env.TOKEN,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "noble-rot-api.27.works",
				port: "",
				pathname: "/media/**",
			},
		],
	},
}
