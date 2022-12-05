import { useContext, useState } from "react"
import { Box, Button, Grid, Modal, Typography } from "@mui/material"
import AuthContext from "../../context/AuthContext"
import style from "./style/style.module.css"
import LoginForm from "./LoginForm"
import SignUpForm from "./signUpForm"

const LoginModal = () => {
	const { handleClose, open } = useContext(AuthContext)
	const [createOrLogin, setCreateOrLogin] = useState(true)

	return (
		<Modal open={open} onClose={handleClose}>
			<Box className={style.modalContainer}>
				<Grid item>{createOrLogin ? <SignUpForm /> : <LoginForm />}</Grid>
				<Grid container>
					{createOrLogin ? (
						<>
							<Typography>
								Have an Account?{" "}
								<Button onClick={() => setCreateOrLogin(!createOrLogin)}>
									Login
								</Button>
							</Typography>
						</>
					) : (
						<>
							<Typography>
								Need an Account?{" "}
								<Button onClick={() => setCreateOrLogin(!createOrLogin)}>
									Sign Up
								</Button>
							</Typography>
						</>
					)}
				</Grid>
			</Box>
		</Modal>
	)
}

export default LoginModal
