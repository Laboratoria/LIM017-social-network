/* eslint-disable import/no-cycle */
import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { onNavigate } from '../main.js';
import { auth, firestore, provider } from '../Firebase/init.js';
import { createElements } from '../util.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'login-div-global';
  const [logo, mainImg, textLogin] = createElements('img', 'img', 'h2');
  logo.src = 'imagenes/DuckyPets-con-transparencia-achicado.png';
  logo.className = 'logo';
  mainImg.src = 'imagenes/imgLogin-con-transparencia.png';
  mainImg.className = 'img-bienvenida';
  textLogin.textContent = 'Iniciar Sesion';
  textLogin.className = 'text-start-h2';
  loginDiv.append(logo, mainImg, textLogin);

  // container botones ingreso, botones
  const [loginButtons, gmailLogin, mailLogin] = createElements('div', 'button', 'button');
  loginButtons.className = 'conteiner-buttons-logins';
  // via gmail
  gmailLogin.setAttribute('id', 'gmail-login');
  gmailLogin.setAttribute('class', 'button-gmail');
  gmailLogin.textContent = 'Ingresar con Gmail';
  gmailLogin.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      });
  });

  // via correo
  mailLogin.setAttribute('id', 'mail-login');
  mailLogin.setAttribute('class', 'button-mail');
  mailLogin.textContent = 'Ingresar con correo';
  mailLogin.addEventListener('click', () => onNavigate('/MainLogin'));

  // add botones al container, container a div global
  loginButtons.append(gmailLogin, mailLogin);
  loginDiv.appendChild(loginButtons);

  const resetPassword = document.createElement('a');
  resetPassword.textContent = '¿Olvidaste tu contraseña?';
  resetPassword.href = '/ForgotPasword';
  resetPassword.id = 'a-reset-password';
  loginDiv.appendChild(resetPassword);

  // No tienes cuenta
  const [noAccount, noAccountRegister] = createElements('p', 'a');
  noAccount.textContent = '¿No tienes cuenta?';
  noAccount.id = 'p-no-account';

  noAccountRegister.textContent = 'Registrate';
  noAccountRegister.href = '/Register';
  noAccountRegister.id = 'a-noaccount-register';
  loginDiv.append(noAccount, noAccountRegister);

  // Boton de regresar a la bienvenida
  const goLandingButton = document.createElement('button');
  goLandingButton.setAttribute('id', 'go-landing-button');
  goLandingButton.setAttribute('class', 'button-go-landing');
  goLandingButton.textContent = 'Regresar al inicio';

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  loginDiv.appendChild(goLandingButton);

  return loginDiv;
};
