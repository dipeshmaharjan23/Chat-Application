import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../Context/AuthContext'
import 'react-toastify/dist/ReactToastify.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
