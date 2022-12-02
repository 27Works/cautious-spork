import { useEffect, useState } from "react"
import ArticleList from "./ArticleList"
import Pagination from "@mui/material/Pagination"
import Loading from "../Loading"

const ArticleIndex = ({ articles, loggedIn }) => {
	// const [articles, setArticles] = useState([])
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [articlesPerPage, setArticlesPerPage] = useState(10)

	const indexOfLastArticle = currentPage * articlesPerPage
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
	const currentArticles = articles.results.slice(
		indexOfFirstArticle,
		indexOfLastArticle
	)
	console.log(articles)
	const handleChange = (value) => {
		setCurrentPage(value)
	}
	useEffect(() => {
		if (articles) {
			setLoading(false)
		}
	}, [articles])
	console.log(articles)

	return (
		<div>
			<h1>Articles:</h1>
			<div>
				{loading && articles ? (
					<Loading />
				) : (
					<>
						<ArticleList articles={currentArticles} loggedIn={loggedIn} />
						<Pagination
							count={Math.ceil(articles.results.length / articlesPerPage)}
							onChange={handleChange}
						/>
					</>
				)}
			</div>
		</div>
	)
}

export default ArticleIndex
