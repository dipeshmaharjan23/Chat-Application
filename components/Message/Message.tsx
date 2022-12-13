import React from 'react'
import styles from '../../styles/Homepage.module.scss'


type Props = {}

const Message = (props: Props) => {
  return (
    // <div
    //   ref={ref}
    //   className={`message ${message.senderId === currentUser.uid && "owner"}`}
    // >
    <div className={`${styles.message}  ${styles.owner}`}>
      <div className={styles.messageInfo}>
        <img
          src={"/user5.png"}
          alt=""
        />
        <span>just now</span>
      </div>
      <div className={styles.messageContent}>
        <p>hello</p>
        {/* {message.img && <img src={message.img} alt="" />} */}
        <img src="/user5.png" />
      </div>
      {/* </div> */}
    </div>
  )
}

export default Message