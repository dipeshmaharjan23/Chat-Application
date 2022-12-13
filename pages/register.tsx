import Head from 'next/head'
import React from 'react'
import Register from '../components/Register/Register'

type Props = {}

const RegisterPage = (props: Props) => {
    return (
        <div>
            <Head>
                <title>Register</title>
            </Head>
            < Register />
        </div>
    )
}

export default RegisterPage