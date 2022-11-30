import React from "react"

const ArticleItem = ({ article }) => {
	const { section, author, created, title, subscriberOnly } = article

	return (
		<div>
			<div>Image</div>
			<div>
				<div>Title</div>
				<div>Content</div>
			</div>
		</div>
	)
}

export default ArticleItem
