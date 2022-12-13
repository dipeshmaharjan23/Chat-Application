import React from 'react'
import Navbar from "../Navbar/Navbar"
import Search from "../Search/Search"
import styles from '../../styles/Homepage.module.scss'
import Chats from '../Chats/Chats'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className={styles.sidebar}>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar