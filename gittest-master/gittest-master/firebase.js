// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf8WKtC3igTauCp2y7Af8NdBZn4YQty-w",
  authDomain: "messagingapp-c71e3.firebaseapp.com",
  projectId: "messagingapp-c71e3",
  storageBucket: "messagingapp-c71e3.appspot.com",
  messagingSenderId: "405110883840",
  appId: "1:405110883840:web:1eea502e952429c84a7ae5"
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
