import React from 'react'
import styles from '../../styles/Homepage.module.scss'

type Props = {}

const Chats = (props: Props) => {
  return (
    <div className={styles.chats}>
      {/* {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))} */}

      <div className={styles.userChat} >
        <img src="/user12.png" alt="avatar" />
        <div className={styles.userChatInfo}>
          <span>Ram</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats