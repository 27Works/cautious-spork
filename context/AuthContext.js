import { useContext, createContext, useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { firebaseConfig } from "../config/firebaseConfig"
const AuthContext = createContext()

export const useAuth = () => {
	return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false)
	const [currentUser, setCurrentUser] = useState()
	const app = initializeApp(firebaseConfig)
	const auth = getAuth(app)
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password)
	}
	const signUp = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password)
	}

	const signOut = () => {
		return auth.signOut()
	}

	const getUser = () => {
		return auth.currentUser
	}

	const value = { loading, currentUser, getUser, login, signUp, signOut }
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
