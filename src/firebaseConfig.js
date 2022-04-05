import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgirqObjPQ7a3Tn_WUl-227PqIBILPepY",
  authDomain: "tell-me-9bc01.firebaseapp.com",
  projectId: "tell-me-9bc01",
  storageBucket: "tell-me-9bc01.appspot.com",
  messagingSenderId: "719389346264",
  appId: "1:719389346264:web:6361bca4a1248fcc7d0aad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);