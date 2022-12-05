import { getData } from "../../helper"
import Loading from "../../components/Loading/Loading"
import { useEffect, useState, useContext } from "react"
import { Button, Typography } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
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
	const router = useRouter()
	console.log(router)
	const { currentUser } = useContext(AuthContext)
	const { title, sections } = article
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (article) {
			if (!currentUser && article.subscriberOnly === true) {
				router.push("/")
			}
			setLoading(false)
		}
	}, [currentUser, article])

	return loading === true && article !== undefined ? (
		<Loading />
	) : (
		<div className={style.container}>
			<div>
				<Button
					className={style.backButton}
					onClick={() => router.replace("/")}>
					<ArrowBackIosIcon />
				</Button>
			</div>
			<div className={style.articleContent}>
				<Typography variant='h4'>{title}</Typography>
				<br />
				{article.author.map((author, index) => {
					return (
						<Typography key={index} variant='subtitle1'>
							By: {author.firstName} {author.lastName}{" "}
						</Typography>
					)
				})}
				<br />
				{sections.map((section, index) => {
					return section.body ? (
						<>
							<Typography key={index}>{section.body}</Typography>
							<br />
						</>
					) : null
				})}
			</div>
		</div>
	)
}

export default ArticleDetails
