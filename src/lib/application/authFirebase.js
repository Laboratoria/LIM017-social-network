/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from './config';

const auth = getAuth(app);

export const registerWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
// eslint-disable-next-line semi
}