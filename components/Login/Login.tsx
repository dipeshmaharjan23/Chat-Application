import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase';
import styles from "../../styles/Homepage.module.scss"
type Props = {

}

const Login = (props: Props) => {
    const [err, setErr] = useState(false);
    const router = useRouter();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    router.push("/homepage")
                    toast.success("Successfully Login")
                })
                .catch((err) => {
                    toast.error("Wrong Password or Email")
                })
        } catch (error) {
            setErr(true)
        }

    }
    return (
        <div className={styles.formContainer}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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