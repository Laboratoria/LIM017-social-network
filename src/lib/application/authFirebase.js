/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from './init.js';

export const auth = getAuth(app);

export const sendEmailVerificationFirebase = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      alert('Ya se envio tu correo de verificación');
    })
    .catch((err) => {
      console.log(err.message);
    });
  // eslint-disable-next-line semi
}

export const registerWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      sendEmailVerificationFirebase();
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      return errorMessage;
    // ..
    });
// eslint-disable-next-line semi
}