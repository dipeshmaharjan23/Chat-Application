import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react'
import styles from '../../styles/Homepage.module.scss'
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";


type Props = {}


const Register = (props: Props) => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const displayName = e.target[0].value;
        // const email = e.target[1].value;
        // const password = e.target[2].value;
        // const file = e.target[3].files[0];

        const { email, password } = e.target as typeof e.target & {
            email: { value: string }
            password: { value: string }

        }

        console.log(email.value, password.value)

        await createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }


    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <span className={styles.logo}> Chat Application</span>
                <span className={styles.title}>Register</span>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="display name" />
                    <input required type="email" placeholder="email" id="email" />
                    <input required type="password" placeholder="password" id="password" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        {/* <Icon icon="mdi:folder-image" /> */}
                        <Icon icon="carbon:user-avatar-filled" />
                        <span>Add an avatar</span>
                    </label>
                    <button disabled={loading} type="submit">Sign up</button>
                    {loading && "Uploading and compressing the image please wait..."}
                    {err && <span>Something went wrong</span>}
                </form>
                <p>
                    You do have an account? <Link href="/register">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Register