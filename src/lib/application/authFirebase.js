/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
// eslint-disable-next-line object-curly-newline
import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from './init.js';
import { app } from './init.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
/* export const signInWithRedirect(auth, provider); */
/* console.log(signInWithRedirect); */

export const sendEmailVerificationFirebase = () => sendEmailVerification(auth.currentUser);
/*  .then(() => {
      // eslint-disable-next-line no-alert
      alert('Ya se envio tu correo de verificación');
    })
    .catch((err) => {
      console.log(err.message);
    }); */
// eslint-disable-next-line semi

export const registerWithEmail = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password)
  /* .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      sendEmailVerificationFirebase();
      return user;
    }) */
/*  .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      return errorMessage;
    // ..
    }) */
// eslint-disable-next-line semi
)
export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
// ya esta modificado en login
/* .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    console.log(user.emailVerified);
    localStorage.setItem('userEmail', user.email);

    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    return errorCode;
  }); */
// eslint-disable-next-line semi

export const signOff = () => signOut(auth);

export const signInWithGoogle = () => (
  signInWithPopup(auth, provider)
);

export const modiedPerfil = (name, photoUser) => updateProfile(auth.currentUser, {
  displayName: name,
  photoURL: photoUser,
})
  .then(() => {
    console.log('estamos cambiando nombre');
    // Profile updated!
    // ...
    console.log(modiedPerfil);
  }).catch((error) => {
    console.log('este es un mensaje de error del nombre de perfil');
  // An error occurred
  // ...
  });