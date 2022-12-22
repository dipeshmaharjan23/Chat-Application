import React, { useContext } from 'react'
import { auth } from '../../firebase'
import styles from "../../styles/Homepage.module.scss"
import { signOut } from 'firebase/auth'
import { AuthContext } from '../../Context/AuthContext'
type Props = {}

const Navbar = (props: Props) => {
  const currentUser = useContext<any>(AuthContext)
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Chat App</span>
      <div className={styles.user}>
        {currentUser ?
          <>
            <img src={`${currentUser.currentUser.photoURL}`} alt="avatar" />
            <span>{currentUser?.currentUser?.displayName}</span>
          </>
          : null
        }
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar