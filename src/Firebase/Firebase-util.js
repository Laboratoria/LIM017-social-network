/* eslint-disable import/no-unresolved */
import
{ initializeApp }
  from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';

import {
  getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, /* , sendSignInLinkToEmail */
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import {
  /* doc, getDoc, */
  getFirestore, collection, addDoc /* , getDocs */,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

export { initializeApp };

export {
  getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};

export { getFirestore, collection, addDoc };
