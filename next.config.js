/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = nextConfig

module.exports = {
	env: {
		TOKEN: process.env.TOKEN,
		FIREBASEAPIKEY: process.env.FIREBASEAPIKEY,
		FIREBASEPROJECTID: process.env.FIREBASEPROJECTID,
		FIREBASEMESSGGSENDERID: process.env.FIREBASEMESSGGSENDERID,
		FIREBASEAPPID: process.env.FIREBASEAPPID,
		FIREBASEMEASUREMENTID: process.env.FIREBASEMEASUREMENTID,
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
