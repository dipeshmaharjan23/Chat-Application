// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDDObyoQGgginY-dFUBwxv8ddVun1_mSC8",
    authDomain: "chat-app-b9be1.firebaseapp.com",
    projectId: "chat-app-b9be1",
    storageBucket: "chat-app-b9be1.appspot.com",
    messagingSenderId: "903455810356",
    appId: "1:903455810356:web:cc12624d9fad348c2e7b61",
    measurementId: "G-RCTJN6HKZM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth= getAuth();