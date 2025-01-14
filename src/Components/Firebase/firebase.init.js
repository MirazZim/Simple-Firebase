// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk_cu1wdd48C6zJP6EPng5JRzZNyklRkA",
  authDomain: "simple-firebase-cee52.firebaseapp.com",
  projectId: "simple-firebase-cee52",
  storageBucket: "simple-firebase-cee52.firebasestorage.app",
  messagingSenderId: "133612009887",
  appId: "1:133612009887:web:1cb42a19dfb2c9abd1e5aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



export default auth;