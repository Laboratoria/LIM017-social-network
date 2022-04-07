import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAI4wQttmvMp9hwAw5-gAe5X5q5DeRmnGg",
  authDomain: "binge-worthy-94b1b.firebaseapp.com",
  projectId: "binge-worthy-94b1b",
  storageBucket: "binge-worthy-94b1b.appspot.com",
  messagingSenderId: "1051976335838",
  appId: "1:1051976335838:web:0a251fdbb4d71af2625d4f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const gProvider = new GoogleAuthProvider();
const fProvider = new FacebookAuthProvider();

export const signUpEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const verificationEmail = (auth) => sendEmailVerification(auth.currentUser);
export const verifyUser = (auth) => onAuthStateChanged(auth, user);
export const logInEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
export const logOut = () => signOut(auth);
export const logInGoogle = (auth) => signInWithPopup(auth, gProvider);
export const logInFacebook = (auth) => signInWithPopup(auth, fProvider);


