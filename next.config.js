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
}
