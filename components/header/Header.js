import { useContext } from "react"
import Link from "next/link"
import headerStyle from "./style/headerStyle.module.css"
import { Button, Typography } from "@mui/material"
import AuthContext from "../../context/AuthContext"

const Header = () => {
	const { handleOpen, currentUser, logOut } = useContext(AuthContext)
	return (
		<div className={headerStyle.headerContainer}>
			<div className={headerStyle.logoContainer}>
				<h2>27Works Demo</h2>
			</div>
			<div className={headerStyle.itemContainer}>
				<ul className={headerStyle.items}>
					<li>
						<Link href='/'>
							<Typography>Home</Typography>
						</Link>
					</li>
					{currentUser ? (
						<li>
							<Typography>Welcome {`${currentUser.email}`}</Typography>
						</li>
					) : null}
					<li>
						{currentUser ? (
							<Button color='primary' variant='outlined' onClick={logOut}>
								Logout
							</Button>
						) : (
							<Button color='primary' variant='outlined' onClick={handleOpen}>
								Login
							</Button>
						)}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
