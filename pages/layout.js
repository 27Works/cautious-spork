import React from "react"
import Header from "../components/header/Header"
import LoginModal from "../components/login/LoginModal"

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<LoginModal />
			<main>{children}</main>
		</>
	)
}

export default Layout
