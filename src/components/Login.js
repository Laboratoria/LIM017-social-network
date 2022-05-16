/* eslint-disable no-alert */
/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/application/controller.js';
import { signInWithGoogle, loginUser } from '../lib/application/authFirebase.js';

export const Login = () => {
  const loginPage = `
  <section class='text-container'>
    <h1>CUY VIAJERO</h1>
    <img class='img-responsive' src='img/cuyLog.png'>
    <p class=text-Register>Login</p>
    <label for='nameEmail'>Email
    <input type='text' id='loginEmail' placeholder ='Ingresar correo' name ='nameEmail' required>
    </label>
    <label for='namePassword'>Contraseña
    <input type= 'password' id='loginPassword' placeholder ='Ingresar contraseña' name ='namePassword' required>
    <p id='messageEmail'></p>
    <p id='messagePassword'></p>
    <p id='errorCodeMessage'></p>
    </label>
    <button id='getInto'> Iniciar sesión
    <button id='buttonGoogle'>Iniciar con <img class='logo-Google' src='img/google.png'> </button>
    <div id='register-link'>
    <p>¿No tienes cuenta? <a href='/register'><span class='link-span'><strong>Registrate</strong></span></a></p>
    </div>
    <button id='buttonBackHome' class='buttonHome'>
    </section>
  `;
  const viewLoginPage = document.createElement('div');
  viewLoginPage.innerHTML = loginPage;
  viewLoginPage.className = 'viewContainer';

  viewLoginPage.querySelector('#getInto').addEventListener('click', (e) => {
    const emailValue = viewLoginPage.querySelector('#loginEmail');
    console.log(emailValue);
    const passwordValue = viewLoginPage.querySelector('#loginPassword');
    console.log(passwordValue);
    const errorCodeMessage = viewLoginPage.querySelector('#errorCodeMessage');

    const messageEmail = viewLoginPage.querySelector('#messageEmail');
    const messagePassword = viewLoginPage.querySelector('#messagePassword');
    if (emailValue.value === '') {
      messageEmail.innerHTML = 'Campo email vacio.';
    } if (passwordValue.value === '') {
      messagePassword.innerHTML = 'Campo de contraseña vacio.';
    }
    e.preventDefault();
    loginUser(emailValue.value, passwordValue.value) // --------nuevos cambios--------
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log(user.emailVerified);
        if (user.emailVerified === true) {
          onNavigate('/home');
        } else {
          alert('Por favor verifica tu bandeja');
          onNavigate('/login');
        }
        localStorage.setItem('userEmail', user.email);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/user-not-found':
            errorCodeMessage.innerHTML = 'No hay usuario registrado con ese correo., verifica e intente de nuevo.';
            break;
          case 'auth/invalid-email':
            alert('El correo ingresado es inválido');
            break;
          case 'auth/wrong-password':
            errorCodeMessage.innerHTML = 'La contraseña no es válida, verifica e intente de nuevo.';
            break;
          default: return errorCode;
        }
        return errorCode;
        // onNavigate('/login');
      });
  });// --------nuevos cambios--------

  viewLoginPage.querySelector('#buttonGoogle').addEventListener('click', () => {
    signInWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log(user.localStorage);
        console.log(userCredential);
        localStorage.setItem('userEmail', user.email);
        onNavigate('/home');
      });
    /* .then((result) => {
        const userGmail = user.photoURL;
        user = result.user.uid;
        document.getElementById('iconUser').setAttribute('src', userGmail.photoURL);
      }); */
  });
  viewLoginPage.querySelector('#buttonBackHome').addEventListener('click', () => onNavigate('/'));
  return viewLoginPage;
};