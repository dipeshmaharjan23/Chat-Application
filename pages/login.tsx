import Head from 'next/head'
import Login from "../components/Login/Login"

type Props = {}

const LoginPage = (props: Props) => {
  
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            < Login/>
        </>
    )
}

export default LoginPage