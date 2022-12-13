import React, { useState } from 'react'
import styles from '../../styles/Homepage.module.scss'

type Props = {}

const Search = (props: Props) => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSelect=()=>{

  }
  return (
    <div className={styles.search}>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="Find a user"
          // onKeyDown={handleKey}
          // onChange={(e) => setUsername(e.target.value)}
          // value={username}
        />
      </div>
      {err && <span>User not found!</span>}
        <div className={styles.userChat} onClick={handleSelect}>
          <img src="/user12.png" alt="avatar" />
          <div className={styles.userChatInfo}>
            <span>Ram</span>
          </div>
        </div>
      {/* {user && ( */}
      {/* )} */}
    </div>
  )
}

export default Search