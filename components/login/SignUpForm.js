import { useContext, useState } from "react"
import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import AuthContext from "../../context/AuthContext"
import style from "./style.module.css"

const SignUpForm = () => {
	const { handleClose, open, signUp } = useContext(AuthContext)
	const [error, setError] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [disableButton, setDisableButton] = useState(false)

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}
	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			setDisableButton(true)
			if (password === confirmPassword) {
				await signUp(email, password)
				setDisableButton(false)
				handleClose()
			}
			setError("Passwords do not match")
			setDisableButton(false)
		} catch (error) {
			setDisableButton(false)
			console.error(error.message)
			setError(error.message)
		}
	}
	return (
		<Box component='form'>
			<Grid container>
				{/* <Grid container className={style.modalContainer}> */}
				<Grid item>
					<Typography>Sign Up</Typography>
				</Grid>
				<Grid item>
					<TextField
						className={style.inputfield}
						type='email'
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
						label='Enter Password'
						variant='filled'
						type='password'
						fullWidth
						margin='normal'
						onChange={handlePasswordChange}
						value={password}
					/>
					<TextField
						className={style.inputfield}
						label='Re-Enter Password'
						variant='filled'
						type='password'
						fullWidth
						margin='normal'
						onChange={handleConfirmPasswordChange}
						value={confirmPassword}
					/>
				</Grid>
				<Grid item alignItems='flex-end'>
					<Button onClick={handleSubmit} disabled={disableButton}>
						Submit
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default SignUpForm
