import { useContext, createContext, useState, useEffect } from "react"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth"
import { auth } from "../config/firebaseConfig"

const AuthContext = createContext()

export const useAuth = () => {
	return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
	console.log("auth", auth)
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const [currentUser, setCurrentUser] = useState()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			setLoading(false)
		})
		return unsubscribe
	}, [])

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}
	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const logOut = () => {
		return signOut(auth)
	}

	const getUser = () => {
		return auth.currentUser
	}

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const value = {
		loading,
		currentUser,
		getUser,
		login,
		signUp,
		logOut,
		handleOpen,
		handleClose,
		open,
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
