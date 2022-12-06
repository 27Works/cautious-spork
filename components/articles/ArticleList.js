import ArticleItem from "./ArticleItem"
import cardStyle from "./styles/cardStyle.module.css"

const ArticleList = ({ articles, loggedIn }) => {
	return (
		<div>
			{articles &&
				articles?.map((article, index) => {
					return (
						<div key={index} className={cardStyle.articleContainer}>
							<ArticleItem article={article} />
						</div>
					)
				})}
		</div>
	)
}

export default ArticleList
