/* eslint-disable import/no-cycle */
import { loginFirebase, registerAndLoginGoogle } from '../lib/firebaseUser.js';
import { onNavigate } from '../main.js';

export const showLogin = () => {
  const signUpHere = document.getElementById('signUpHere');
  const btnLogIn = document.getElementById('btnLogIn');
  const messageLogIn = document.querySelector('.messageLogInError');
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
          messageLogIn.innerHTML = '';
          if (error.code === 'auth/invalid-email') {
            messageLogIn.innerHTML = 'The provided value for the email user property is invalid. It must be a string email address.';
          }
          if (error.code === 'auth/wrong-password') {
            messageLogIn.innerHTML = 'The provided value for the password user property is invalid. It must be a string with at least six characters.';
          }
          if (error.code === 'auth/user-not-found') {
            messageLogIn.innerHTML = 'There is no existing user record corresponding to the provided identifier.';
          }
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          // messageLogIn.innerHTML = errorCode;
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
