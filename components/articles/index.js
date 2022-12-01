import { useEffect, useState } from "react"
import ArticleList from "./ArticleList"
import Loading from "../Loading"

const ArticleIndex = ({ articles, loggedIn }) => {
	// const [articles, setArticles] = useState([])
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (articles) {
			setLoading(false)
		}

		// setArticles(response.results)
	}, [articles])
	console.log(articles)
	return (
		<div>
			<h1>Articles:</h1>
			<div>
				{loading && articles ? (
					<Loading />
				) : (
					<ArticleList articles={articles.results} loggedIn={loggedIn} />
				)}
			</div>
		</div>
	)
}

export default ArticleIndex
