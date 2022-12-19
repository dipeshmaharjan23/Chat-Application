import React, { useContext } from 'react'
import { auth } from '../../firebase'
import styles from "../../styles/Homepage.module.scss"
import { signOut } from 'firebase/auth'
import { AuthContext } from '../../Context/AuthContext'
type Props = {}

const Navbar = (props: Props) => {
 const {currentUser} = useContext(AuthContext)
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Chat App</span>
      <div className={styles.user}>
        <img src={currentUser.photoURL} alt="avatar" />
        <span>ram</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar