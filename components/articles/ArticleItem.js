import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import cardStyle from "./styles/cardStyle.module.css"
import { Button, Grid, Box, Typography } from "@mui/material"
import AuthContext from "../../context/AuthContext"

const ArticleItem = ({ article }) => {
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

	const { currentUser, handleOpen } = useContext(AuthContext)
	// console.log(currentUser)
	return (
		<Box className={cardStyle.articleCard}>
			<Grid container>
				<Grid item xs={6}>
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
				<Grid container item xs={6}>
					<Grid
						container
						direction='column'
						justifyContent='space-between'
						alignItems='flex-start'>
						<Grid item xs={3}>
							<Grid container>
								<Typography variant='h5'>{title}</Typography>
							</Grid>
						</Grid>
						<Grid item xs={3}>
							<Typography>{metaDescription}</Typography>
						</Grid>
						<Grid container item justifyContent='flex-end'>
							{subscriberOnly ? (
								subscriberOnly && currentUser ? (
									<Button variant='contained' className={cardStyle.button}>
										<Link href={`articles/${slug}`}>ReadMore</Link>
									</Button>
								) : (
									<Button variant='contained' className={cardStyle.button}>
										<Typography variant='body2' onClick={handleOpen}>
											Login to ReadMore
										</Typography>
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
