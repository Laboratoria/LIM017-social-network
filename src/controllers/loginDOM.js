/* eslint-disable import/no-cycle */
import { loginFirebase, registerAndLoginGoogle } from '../lib/firebaseUser.js';
import { onNavigate } from '../main.js';

export const showLogin = () => {
  const signUpHere = document.getElementById('signUpHere');
  const btnLogIn = document.getElementById('btnLogIn');
  const messageLogIn = document.querySelector('.messageLogIn');
  // BOTON LOGIN
  btnLogIn.addEventListener('click', () => {
    const emailLogIn = document.querySelector('#emailLogIn').value;
    const passwordLogIn = document.querySelector('#passwordLogIn').value;
    // valida espacios en blanco
    if ((emailLogIn === '') || (passwordLogIn === '')) {
      messageLogIn.innerHTML = 'Fill in the missing field';
    } else {
      loginFirebase(emailLogIn, passwordLogIn)
        .then((userCredential) => {
          const user = userCredential.user;
          // getData();
          if (user.emailVerified) {
            onNavigate('/home');
          } else {
            alert('Vericar tu cuenta');
          }
          console.log(userCredential);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          messageLogIn.innerHTML = errorMessage;
        });
    }
  });
  // LOG IN GOOGLE
  const btnLogInGoogle = document.getElementById('btnLogInGoogle');
  btnLogInGoogle.addEventListener('click', () => {
    registerAndLoginGoogle()
      .then(() => {
        onNavigate('/home');
        // getData();
      });
  });
  // BOTON QUE REDIRECCIONA AL REGISTER -----------------------------------------------
  signUpHere.addEventListener('click', () => {
    onNavigate('/register');
  });
};
