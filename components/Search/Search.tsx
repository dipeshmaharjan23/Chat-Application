import React, { useState } from 'react'
import styles from '../../styles/Homepage.module.scss'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase';

type Props = {}

const Search = (props: Props) => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);
  const [err, setErr] = useState(false);

  const handleSelect = async () => {
    const user = collection(db, "users");
    const q = query(user, where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const dat = doc.data();
        if(dat){
            setUser(dat)
        }
      });

    } catch (error) {
      setErr(true)
    }

  }
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.code === "Enter" && handleSelect()
  }
  return (
    <div className={styles.search}>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={e => handleKey(e)}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
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