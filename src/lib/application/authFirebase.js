/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
// eslint-disable-next-line object-curly-newline
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from './init.js';
import { onNavigate } from './controller.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
/* export const signInWithRedirect(auth, provider); */
/* console.log(signInWithRedirect); */

export const sendEmailVerificationFirebase = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      // eslint-disable-next-line no-alert
      alert('Ya se envio tu correo de verificación');
    })
    .catch((err) => {
      console.log(err.message);
    });
  // eslint-disable-next-line semi
}

export const registerWithEmail = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      sendEmailVerificationFirebase();
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      return errorMessage;
    // ..
    })
// eslint-disable-next-line semi
)
export const loginUser = (email, password) => (
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorCode;
    })
// eslint-disable-next-line semi
)
export const signOff = () => signOut(auth);
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      console.log('El usuario ingresó con Google exitosamente', user.uid, user.email, user.displayName);
      onNavigate('/');

    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};

/* export const getRedirect = () => {
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
 */