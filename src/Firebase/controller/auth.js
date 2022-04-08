import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from '../init.js';

export const auth = getAuth(app);
// //Creo que teniamos que hacer un callback con este codigo
// Intento de crear cuenta
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
    // ..
    });
};
// googlew authentication
export const provider = new GoogleAuthProvider();
