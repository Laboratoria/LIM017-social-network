/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  const logo = document.createElement('img');
  logo.src = 'imagenes/DuckyPets.png';
  const textLogin = document.createElement('h2');
  textLogin.textContent = 'Iniciar Sesion';
  loginDiv.append(logo, textLogin);

  // container botones ingreso
  const loginButtons = document.createElement('div');

  // via gmail
  const gmailLogin = document.createElement('button');
  gmailLogin.setAttribute('id', 'gmail-login');
  gmailLogin.textContent = 'Ingresar con Gmail';

  // via facebook
  const fbLogin = document.createElement('button');
  fbLogin.setAttribute('id', 'fb-login');
  fbLogin.textContent = 'Ingresar con Facebook';

  // via correo
  const mailLogin = document.createElement('button');
  mailLogin.setAttribute('id', 'mail-login');
  mailLogin.textContent = 'Ingresar con correo';
  mailLogin.addEventListener('click', () => onNavigate('/MainLogin'));

  // add botones al container, container a div global
  loginButtons.append(gmailLogin, fbLogin, mailLogin);
  loginDiv.appendChild(loginButtons);

  const forgotPassword = document.createElement('a');
  forgotPassword.textContent = '¿Olvidaste tu contraseña?';
  forgotPassword.href = '/ForgotPasword';
  loginDiv.appendChild(forgotPassword);

  // No tienes cuenta
  const noAccount = document.createElement('p');
  noAccount.textContent = '¿No tienes cuenta?';
  const noAccountRegister = document.createElement('a');
  noAccountRegister.textContent = 'Registrate';
  noAccountRegister.href = '/Register';
  loginDiv.append(noAccount, noAccountRegister);

  // Boton de regresar a la bienvenida
  const goLandingButton = document.createElement('button');
  goLandingButton.textContent = 'Regresar al inicio';

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  loginDiv.appendChild(goLandingButton);

  return loginDiv;
};
