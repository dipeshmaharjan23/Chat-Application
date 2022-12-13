import React from 'react'
import Input from '../Input/Input'
import styles from '../../styles/Homepage.module.scss'
import { Icon } from "@iconify/react"
import Messages from '../Messages/Messages'


type Props = {}

const Chat = (props: Props) => {
  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        <span>Ram</span>
        <div className={styles.chatIcons}>
          <Icon icon="clarity:video-camera-solid" />
          <Icon icon="material-symbols:person-add" />
          <Icon icon="majesticons:more-menu" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat