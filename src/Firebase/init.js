import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';

import {
  getFirestore, collection, addDoc, getDocs,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import { firebaseConfig } from './config.js';

const app = initializeApp(firebaseConfig);

// init services
export const firestore = getFirestore(app); // esto es db

// proveedor Gmail auth

export const provider = new GoogleAuthProvider();

// pop up autenticacion

export const auth = getAuth();
