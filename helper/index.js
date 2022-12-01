export const getData = async () => {
	const response = await fetch("https://noble-rot-api.27.works/1.0/posts", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.token}`,
			"Content-Type": "application/json",
		},
	})

	const data = await response.json()
	return data
}
