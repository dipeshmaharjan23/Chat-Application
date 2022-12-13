import Link from 'next/link';
import React, { FormEvent, useState } from 'react'
import styles from "../../styles/Login.module.scss"
type Props = {

}

const Login = (props: Props) => {

    const [err, setErr] = useState(false);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <span className={styles.logo}>Chat Application</span>
                <span className={styles.title}>Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" autoComplete='false' />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You don't have an account? <Link href="/register">Register</Link></p>
            </div>
        </div>
    )
}

export default Login