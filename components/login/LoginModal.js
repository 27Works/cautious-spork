import { useContext, useState } from "react"
import {
	Box,
	Button,
	Card,
	Grid,
	Modal,
	TextField,
	Typography,
} from "@mui/material"
import AuthContext from "../../context/AuthContext"
import style from "./style.module.css"
import LoginForm from "./LoginForm"
import SignUpForm from "./signUpForm"

const LoginModal = () => {
	const { handleClose, open } = useContext(AuthContext)
	const [createOrLogin, setCreateOrLogin] = useState(true)

	return (
		<Modal open={open} onClose={handleClose}>
			<Box className={style.modalContainer}>
				<Grid>
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
				<Grid item>{createOrLogin ? <SignUpForm /> : <LoginForm />}</Grid>
			</Box>
		</Modal>
	)
}

export default LoginModal
