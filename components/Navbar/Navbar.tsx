import React from 'react'
import { auth } from '../../firebase'
import styles from "../../styles/Homepage.module.scss"
import { signOut } from 'firebase/auth'
type Props = {}

const Navbar = (props: Props) => {

  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Chat App</span>
      <div className={styles.user}>
        <img src="/user12.png" alt="avatar" />
        <span>ram</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar