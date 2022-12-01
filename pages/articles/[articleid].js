import { useRouter } from "next/router"

import { getData } from "../../helper"

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
	console.log("articleid: ", articleid)
	return { props: { article } }
}

const ArticleDetails = ({ article }) => {
	const router = useRouter()
	const { articleid } = router.query
	// console.log(router)
	return <div>Details: {articleid}</div>
}

export default ArticleDetails
