import { useContext, useState } from "react"
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material"
import AuthContext from "../../context/AuthContext"
import style from "./style.module.css"

const LoginModal = () => {
	const { handleClose, open, signUp } = useContext(AuthContext)
	const [error, setError] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [disableButton, setDisableButton] = useState(false)

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			setDisableButton(true)
			await signUp(email, password)
			setDisableButton(false)
			handleClose()
		} catch (error) {
			setDisableButton(false)
			console.error(error.message)
			setError(error.message)
		}
	}
	return (
		<Modal open={open} onClose={handleClose}>
			<Box component='form'>
				<Grid container className={style.modalContainer}>
					<Grid item>
						<Typography>Sign Up form</Typography>
					</Grid>
					<Grid item>
						<TextField
							className={style.inputfield}
							type='email'
							id='filled-basic'
							label='Enter Email'
							variant='filled'
							fullWidth
							margin='normal'
							onChange={handleEmailChange}
							value={email}
						/>
						{error ? <Typography>{error}</Typography> : null}
						<TextField
							className={style.inputfield}
							id='filled-basic'
							label='Enter Password'
							variant='filled'
							type='password'
							fullWidth
							margin='normal'
							onChange={handlePasswordChange}
							value={password}
						/>
					</Grid>
					<Grid item alignItems='flex-end'>
						<Button onClick={handleSubmit} disabled={disableButton}>
							Submit
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Modal>
	)
}

export default LoginModal
