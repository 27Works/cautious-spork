import React from "react"

const ArticleList = ({ articles }) => {
	// const { results } = articles
	console.log(articles)
	return (
		<div>
			{articles &&
				articles?.map((article, index) => {
					return <div key={index}>{article.title}</div>
				})}
		</div>
	)
}

export default ArticleList
