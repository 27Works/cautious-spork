import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import cardStyle from "./styles/cardStyle.module.css"
import { Button, Grid, Box, Typography } from "@mui/material"
import AuthContext from "../../context/AuthContext"

const ArticleItem = ({ article, loggedIn }) => {
	const {
		_id,
		author,
		created,
		slug,
		title,
		subscriberOnly,
		sections,
		metaDescription,
	} = article

	const { currentUser } = useContext(AuthContext)
	console.log(currentUser)
	return (
		<Box className={cardStyle.articleCard}>
			{/* <div>
				{sections[0].image[0].url ? (
					<Image
						className={cardStyle.imageContainer}
						src={sections[0].image[0].url}
						alt={sections[0].image[0].fileName}
						width={sections[0].image[0].width}
						height={sections[0].image[0].height}
					/>
				) : null}
			</div> */}
			{/* <div>
				<div className={cardStyle.articleTitle}>{title}</div>
				<div className={cardStyle.articleContent}>
					<div className={cardStyle.articleDesc}>{metaDescription}</div>
					<div className={cardStyle.buttonContainer}>
						{subscriberOnly ? (
							subscriberOnly && loggedIn ? (
								<Button variant='contained' className={cardStyle.button}>
									<Link href='/articles/'>ReadMore</Link>
								</Button>
							) : (
								<Button variant='contained' className={cardStyle.button}>
									<Link href='/articles/'>Login to ReadMore</Link>
								</Button>
							)
						) : (
							<Button variant='contained' className={cardStyle.button}>
								<Link href={`articles/${slug}`}>ReadMore</Link>
							</Button>
						)}
					</div>
				</div>
			</div> */}

			<Grid spacing={2} container columns={2}>
				<Grid item xs>
					{sections[0].image[0].url ? (
						<Image
							className={cardStyle.imageContainer}
							src={sections[0].image[0].url}
							alt={sections[0].image[0].fileName}
							width={sections[0].image[0].width}
							height={sections[0].image[0].height}
						/>
					) : null}
				</Grid>
				<Grid container xs>
					<Typography variant='h5'>{title}</Typography>
					<Grid
						container
						direction='column'
						justifyContent='space-between'
						alignItems='flex-end'>
						<Grid item>
							<Typography>{metaDescription}</Typography>
						</Grid>
						<Grid item>
							{subscriberOnly ? (
								subscriberOnly && currentUser ? (
									<Button variant='contained' className={cardStyle.button}>
										<Link href={`articles/${slug}`}>ReadMore</Link>
									</Button>
								) : (
									<Button variant='contained' className={cardStyle.button}>
										<Link href='/articles/'>Login to ReadMore</Link>
									</Button>
								)
							) : (
								<Button variant='contained' className={cardStyle.button}>
									<Link href={`articles/${slug}`}>ReadMore</Link>
								</Button>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}

export default ArticleItem
