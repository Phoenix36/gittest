// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAf2rHYuPxt0F9YXK8JKA3nDAj_Kb6-H8",
  authDomain: "xstring-e76e0.firebaseapp.com",
  projectId: "xstring-e76e0",
  storageBucket: "xstring-e76e0.appspot.com",
  messagingSenderId: "576039450773",
  appId: "1:576039450773:web:396ce1346359d6f145439c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  

