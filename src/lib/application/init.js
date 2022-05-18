/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
// import { firebaseConfig } from './config.js';
export {
  getFirestore,
  collection,
  addDoc, getDocs,
  serverTimestamp,
  onSnapshot,
  doc,
  Timestamp,
  deleteDoc,
  query,
  orderBy,
  getDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

// export {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendEmailVerification,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   updateProfile,
//   Timestamp,
//   orderBy,
//   query,
// };

// export {
//   getFirestore, collection, addDoc, getDocs, serverTimestamp, onSnapshot, doc, deleteDoc, getDoc,
// };
