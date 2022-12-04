import { useEffect, useState } from "react"
import ArticleList from "./ArticleList"
import Pagination from "@mui/material/Pagination"
import Loading from "../Loading"
import cardStyle from "./styles/cardStyle.module.css"
import LoginModal from "../login/LoginModal"

const ArticleIndex = ({ articles }) => {
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [articlesPerPage, setArticlesPerPage] = useState(10)

	const indexOfLastArticle = currentPage * articlesPerPage
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
	const currentArticles = articles.results.slice(
		indexOfFirstArticle,
		indexOfLastArticle
	)

	const handleChange = (e, value) => {
		setCurrentPage(value)
	}
	useEffect(() => {
		if (articles) {
			setLoading(false)
		}
	}, [articles])

	return (
		<div>
			<h1>Articles:</h1>
			<div className={cardStyle.listContainer}>
				{loading && articles ? (
					<Loading />
				) : (
					<>
						{/* <LoginModal /> */}
						<ArticleList articles={currentArticles} />
						<Pagination
							className={cardStyle.pagination}
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
