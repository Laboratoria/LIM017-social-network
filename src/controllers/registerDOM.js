/* eslint-disable import/no-cycle */
import {
  registerFirebase, registerAndLoginGoogle, updaterUserProfile, emailVerification,
} from '../lib/firebaseUser.js';
import { onNavigate } from '../main.js';

export const showRegister = () => {
  const logInHere = document.getElementById('logInHere');
  const name = document.querySelector('#name');
  const messageSignUpError = document.querySelector('.messageSignUpError');
  // VALIDACION que no permite numeros
  name.addEventListener('keyup', (e) => {
    const valorName = e.target.value;
    name.value = valorName.replace(/\d/g, '');
  });

  // funcion que REGISTRA -----------------------------------------------
  const btnRegister = document.getElementById('btnRegister');
  btnRegister.addEventListener('click', () => {
    const email = document.querySelector('#emailSignUp').value;
    const password = document.querySelector('#passwordSignUp').value;
    const nameValue = name.value;
    // FUNCION DE VALIDAR ESPACIOS
    if ((name.value === '') || (email === '') || (password === '')) {
      messageSignUpError.innerHTML = 'Fill in the missing field';
    } else {
      registerFirebase(email, password, nameValue)
        .then((userCredential) => {
          const user = userCredential.user;
          emailVerification(); // envia msj al correo
          updaterUserProfile(nameValue);
          onNavigate('/');
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          console.log(errorMessage);
          messageSignUpError.innerHTML = errorMessage;
        });
    }
  });
  // REGISTRO GOOGLE -----------------------------------------------
  const btnSignUpGoogle = document.getElementById('btnSignUpGoogle');
  btnSignUpGoogle.addEventListener('click', () => {
    registerAndLoginGoogle()
      .then(() => {
        onNavigate('/home');
        // getData();
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
  });
  // BOTON QUE REDIRECCIONA AL LOGIN -----------------------------------------------
  logInHere.addEventListener('click', () => {
    onNavigate('/'); // ruta del login
  });
};
