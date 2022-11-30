const token = process.env.TOKEN
export const callData = async () => {
	const response = await fetch("https://noble-rot-api.27.works/1.0/posts", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
	})

	return response
}
// console.log(data)
