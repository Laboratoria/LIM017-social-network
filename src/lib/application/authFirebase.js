/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from './init.js';

export const auth = getAuth(app);

export const sendEmailVerificationFirebase = () => {
  sendEmailVerification(auth.currentUser)
.then(() => {
    console.log('ya envie tu email de verification');
  
  }).catch((err) => {
    console.log(err.message);
  })
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

