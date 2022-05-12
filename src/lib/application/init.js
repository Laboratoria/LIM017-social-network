/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import {
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
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
}
  from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import { firebaseConfig } from './config.js';

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  Timestamp,
};
export const app = initializeApp(firebaseConfig);
export const getCurrentUser = getAuth().currentUser;

export {
  getFirestore, collection, addDoc, getDocs, serverTimestamp, onSnapshot, doc, deleteDoc, query, orderBy,
};
