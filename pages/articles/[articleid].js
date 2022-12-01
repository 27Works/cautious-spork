import { getData } from "../../helper"
import Loading from "../../components/Loading"
import { useEffect, useState } from "react"

export const getStaticPaths = async () => {
	const data = await getData()
	const article = data.results.map((item) => {
		return { params: { articleid: item.slug } }
	})
	return { paths: article, fallback: false }
}

export const getStaticProps = async (context) => {
	const { params } = context
	const articleid = params.articleid

	const data = await getData()

	const article = data.results.find((item) => item.slug === articleid)

	return { props: { article } }
}

const ArticleDetails = ({ article }) => {
	const { title, sections } = article
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (article) {
			setLoading(false)
		}
	}, [article])
	// console.log(router)
	return loading === true && article !== undefined ? (
		<Loading />
	) : (
		<div>
			<div>{title}</div>
			<br />
			<div>{sections[3].body}</div>
		</div>
	)
}

export default ArticleDetails
