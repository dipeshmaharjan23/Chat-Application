import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import styles from "../../styles/Homepage.module.scss";
import { auth, storage, db } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

type Props = {};
const Register = (props: Props) => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  ; const handleSubmit = async (e: any) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // const { displayName, email, password, file } = e.target as typeof e.target & {
    //     displayName: { value: string }
    //     email: { value: string }
    //     password: { value: string }
    //     file: { files: string }
    // }

    // const name = displayName.value;
    // const mail = email.value;
    // const passWord = password.value;
    // const filee = file.files[0];

    // console.log(email.value, password.value,displayName.value,file.files[0])
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          toast.success("Register successfully ! Redirecting")
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              toast.warn("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              toast.loading("Upload is running");
              break;
          }
        },
        (error) => {
          setErr(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            await updateProfile(res.user, {
              displayName: displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      router.push("/")
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <div className={styles.formContainer}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={styles.formWrapper}>
        <span className={styles.logo}> Chat Application</span>
        <span className={styles.title}>Register</span>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="display name"
            id="displayName"
          />
          <input required type="email" placeholder="email" id="email" />
          <input
            required
            type="password"
            placeholder="password"
            id="password"
          />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            {/* <Icon icon="mdi:folder-image" /> */}
            <Icon icon="carbon:user-avatar-filled" />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading} type="submit">
            Sign up
          </button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link href="/register">Login</Link>
        </p>
      </div>

    </div>
  );
};

export default Register;
