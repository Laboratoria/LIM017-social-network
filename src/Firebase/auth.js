/* eslint-disable no-undef */
import {
  getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from './init.js';

export const auth = getAuth(app);

// proveedor Gmail auth

export const provider = new GoogleAuthProvider();

export const createAccountByGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.email;
    console.log(email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
    // ...
  });
};

// Intento de crear cuenta con correo Email

export const CreateAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      if (errorCode === 'auth/email-already-in-use') {
        alert('Email already in use');
      }
    });
};

// Intento de ingresar con correo y contraseña...

export const LoginByEmailPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      if (errorCode === 'auth/wrong-password') {
        alert('wrong password');
      }
      if (errorCode === 'user-not-found') {
        alert('correo mal escrito');
      }
    });
};
