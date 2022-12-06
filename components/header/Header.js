import { useContext } from "react"
import Link from "next/link"
import headerStyle from "./style/headerStyle.module.css"
import { Button, Typography } from "@mui/material"
import { CustomButton2 } from "../CustomButton/CustomButton"
import AuthContext from "../../context/AuthContext"

const Header = () => {
	const { handleOpen, currentUser, logOut } = useContext(AuthContext)
	return (
		<div className={headerStyle.headerContainer}>
			<div className={headerStyle.logoContainer}>
				<Link href='/'>
					<h2>27Works Demo</h2>
				</Link>
			</div>
			<div className={headerStyle.itemContainer}>
				<ul className={headerStyle.items}>
					{currentUser ? (
						<li>
							<Typography>Welcome {`${currentUser.email}`}</Typography>
						</li>
					) : null}
					<li>
						{currentUser ? (
							<CustomButton2
								className={headerStyle.loginButton}
								onClick={logOut}>
								Logout
							</CustomButton2>
						) : (
							<CustomButton2
								className={headerStyle.loginButton}
								onClick={handleOpen}>
								Login
							</CustomButton2>
						)}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
