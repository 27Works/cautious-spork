import Image from "next/image"
import Link from "next/link"
import React from "react"
import cardStyle from "./styles/cardStyle.module.css"

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

	return (
		<div className={cardStyle.articleCard}>
			<div>
				{sections[0].image[0].url ? (
					<Image
						className={cardStyle.imageContainer}
						src={sections[0].image[0].url}
						alt={sections[0].image[0].fileName}
						width={sections[0].image[0].width}
						height={sections[0].image[0].height}
					/>
				) : null}
			</div>
			<div>
				<div className={cardStyle.articleTitle}>{title}</div>
				<div className={cardStyle.articleContent}>
					<div className={cardStyle.articleDesc}>{metaDescription}</div>
					{subscriberOnly ? (
						subscriberOnly && loggedIn ? (
							<div>
								<Link href='/articles/'>ReadMore</Link>
							</div>
						) : (
							<p>Hey {`${subscriberOnly} ${loggedIn}`}</p>
						)
					) : (
						<div>
							<Link href={`articles/${slug}`}>ReadMore</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ArticleItem
