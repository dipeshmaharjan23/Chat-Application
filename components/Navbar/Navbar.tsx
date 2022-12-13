import React from 'react'
import styles from "../../styles/Homepage.module.scss"
type Props = {}

const Navbar = (props: Props) => {
  const signOut = () => {

  }
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Chat App</span>
      <div className={styles.user}>
        <img src="/user12.png" alt="avatar" />
        <span>ram</span>
        <button onClick={() => signOut}>logout</button>
      </div>
    </div>
  )
}

export default Navbar