import ArticleItem from "./ArticleItem"
import cardStyle from "./styles/cardStyle.module.css"

const ArticleList = ({ articles, loggedIn }) => {
	// const { results } = articles

	console.log(articles)
	console.log(loggedIn)

	return (
		<div>
			{articles &&
				articles?.map((article, index) => {
					return (
						<div key={index} className={cardStyle.articleContainer}>
							<ArticleItem article={article} loggedIn={loggedIn} />
						</div>
					)
				})}
		</div>
	)
}

export default ArticleList
