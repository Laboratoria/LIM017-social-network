import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import {
  getFirestore, collection, addDoc, getDocs,

} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
<<<<<<< HEAD

=======
>>>>>>> a22e36c044e5ddec0d29360498c6679d46604b06
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { firebaseConfig } from './config.js';

const app = initializeApp(firebaseConfig);

// init services
export const firestore = getFirestore(app); // esto es db

// proveedor Gmail auth

export const provider = new GoogleAuthProvider();

// pop up autenticacion

export const auth = getAuth();
