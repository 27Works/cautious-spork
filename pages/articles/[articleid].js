import { getData } from "../../helper"
import Loading from "../../components/Loading/Loading"
import { useEffect, useState, useContext } from "react"
import { Box, Typography } from "@mui/material"
import { useRouter } from "next/router"
import AuthContext from "../../context/AuthContext"
import style from "../../styles/style.module.css"

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
	// console.log(article)
	const router = useRouter()
	const { currentUser } = useContext(AuthContext)
	const { title, sections } = article
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!currentUser && article.subscriberOnly === true) {
			router.push("/")
		}
	}, [currentUser])

	useEffect(() => {
		if (article) {
			setLoading(false)
		}
	}, [article])
	// console.log(router)
	return loading === true && article !== undefined ? (
		<Loading />
	) : (
		<div className={style.container}>
			{/* <Container> */}
			<Typography variant='h4'>{title}</Typography>
			<br />
			{article.author.map((author, index) => {
				return (
					<Typography key={index} variant='subtitle1'>
						By: {author.firstName} {author.lastName}
					</Typography>
				)
			})}
			<br />
			{sections.map((section, index) => {
				return section.body ? (
					<Box key={index} sx={{ margin: "35px" }}>
						{section.body}
					</Box>
				) : null
			})}
			{/* </Container> */}
		</div>
	)
}

export default ArticleDetails
