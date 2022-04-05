/* eslint-disable import/no-cycle */
import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { onNavigate } from '../main.js';
import { auth, provider } from '../Firebase/init.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.setAttribute('id', 'login-div');
  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo');
  logo.src = 'imagenes/DuckyPets.png';
  const imgWelcome = document.createElement('img');
  imgWelcome.setAttribute('class', 'imgBienvenida');
  imgWelcome.src = 'imagenes/married-couple-with-dog.jpg';
  const textLogin = document.createElement('h2');
  textLogin.textContent = 'Iniciar Sesion';
  loginDiv.append(logo, imgWelcome, textLogin);

  // container botones ingreso
  const loginButtons = document.createElement('div');
  loginButtons.setAttribute('class', 'BoxTypeLogin');

  // via gmail
  const gmailLogin = document.createElement('button');
  gmailLogin.setAttribute('id', 'gmail-login');
  gmailLogin.setAttribute('class', 'button-gmail');
  gmailLogin.textContent = 'Ingresar con Gmail';
  gmailLogin.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log('Me loggie');

        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // // ...
      }); // catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  });

  // via facebook
  const fbLogin = document.createElement('button');
  fbLogin.setAttribute('id', 'fb-login');
  fbLogin.setAttribute('class', 'button-fb');
  fbLogin.textContent = 'Ingresar con Facebook';

  // via correo
  const mailLogin = document.createElement('button');
  mailLogin.setAttribute('id', 'mail-login');
  mailLogin.setAttribute('class', 'button-mail');
  mailLogin.textContent = 'Ingresar con correo';
  mailLogin.addEventListener('click', () => onNavigate('/MainLogin'));

  // add botones al container, container a div global
  loginButtons.append(gmailLogin, fbLogin, mailLogin);
  loginDiv.appendChild(loginButtons);

  const forgotPassword = document.createElement('a');
  forgotPassword.setAttribute('id', 'a-Login');
  forgotPassword.textContent = '¿Olvidaste tu contraseña?';
  forgotPassword.href = '/ForgotPasword';
  loginDiv.appendChild(forgotPassword);

  // No tienes cuenta
  const noAccount = document.createElement('p');
  noAccount.setAttribute('id', 'p-no-account');
  noAccount.textContent = '¿No tienes cuenta?';
  const noAccountRegister = document.createElement('a');
  noAccountRegister.setAttribute('id', 'a-no-account-register');
  noAccountRegister.textContent = 'Registrate';
  noAccountRegister.href = '/Register';
  loginDiv.append(noAccount, noAccountRegister);

  // Boton de regresar a la bienvenida
  const goLandingButton = document.createElement('button');
  goLandingButton.setAttribute('id', 'button-LoginGoLanding');
  goLandingButton.setAttribute('class', 'button-goLanding');
  goLandingButton.textContent = 'Regresar al inicio';

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  loginDiv.appendChild(goLandingButton);

  return loginDiv;
};
