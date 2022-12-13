import React from 'react'
import Message from '../Message/Message'
import styles from '../../styles/Homepage.module.scss'

type Props = {}

const Messages = (props: Props) => {
  return (
    <div className={styles.messages}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages