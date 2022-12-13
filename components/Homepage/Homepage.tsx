import React from 'react'
import Chat from '../Chat/Chat'
import Sidebar from '../Sidebar/Sidebar'
import styles from '../../styles/Homepage.module.scss'


type Props = {}

const Homepage = (props: Props) => {
    return (
        <div>
            <div className={styles.home}>
                <div className={styles.container}>
                    <Sidebar />
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Homepage