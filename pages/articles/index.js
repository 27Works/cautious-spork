import { useEffect, useState } from "react"
import ArticleList from "../../components/articles/ArticleList"
import Loading from "../../components/Loading"
import { callData } from "../api/callData"

const ArticleIndex = () => {
	const [articles, setArticles] = useState([])
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const response = callData()
			.then((res) => {
				if (res.status === 200) {
					return res.json()
				} else {
					throw res
				}
			})
			.then((data) => setArticles(data))
			.catch((e) => {
				console.error("Error fetching data: ", e)
				setError(true)
			})
			.finally(() => {
				setLoading(false)
			})
		console.log("Hey", response)

		// setArticles(response.results)
	}, [])
	// console.log(articles)
	return (
		<div>
			<h1>Articles:</h1>
			<div>
				{loading && articles ? (
					<Loading />
				) : (
					<ArticleList articles={articles.results} />
				)}
			</div>
		</div>
	)
}

export default ArticleIndex
