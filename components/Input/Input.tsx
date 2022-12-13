import { Icon } from '@iconify/react'
import React from 'react'
import styles from '../../styles/Homepage.module.scss'

type Props = {}

const Input = (props: Props) => {
  const handleSend = () => {

  }
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Type something..."
      // onChange={(e) => setText(e.target.value)}
      // value={text}
      />
      <div className={styles.send}>
        <Icon icon="teenyicons:attach-outline" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
        // onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <Icon icon ="material-symbols:image" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input