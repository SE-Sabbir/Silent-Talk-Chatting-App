// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwjEqoIx_7uakc_B2FJ1fLrKeohxmo95I",
  authDomain: "silent-talk-f1bad.firebaseapp.com",
  projectId: "silent-talk-f1bad",
  storageBucket: "silent-talk-f1bad.firebasestorage.app",
  messagingSenderId: "589275202947",
  appId: "1:589275202947:web:bcd0113daa6d12f65e62b6",
  measurementId: "G-9DK9W2EFVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app