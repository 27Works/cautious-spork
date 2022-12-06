import { AuthProvider } from "../context/AuthContext"
import "../styles/globals.css"
import Layout from "./layout"

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthProvider>
	)
}

export default MyApp
