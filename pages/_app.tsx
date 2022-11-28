import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../components/AuthProvider/AuthProvider";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
