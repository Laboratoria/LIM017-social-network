/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
// registro
export const SignUp = () => {
  const registerDiv = document.createElement('div');
  const registerH2 = document.createElement('h2');
  registerH2.textContent = 'Registrarse';
  const logo = document.createElement('img');
  logo.src = 'imagenes/DuckyPets.png';
  registerDiv.append(logo, registerH2);

  // container botones registro
  const signUpButtons = document.createElement('div');
  signUpButtons.setAttribute('class', 'BoxTypeLogin');

  // via gmail
  const gmailSignUp = document.createElement('button');
  gmailSignUp.setAttribute('id', 'gmail-signup');
  gmailSignUp.textContent = 'Registrarse con Gmail';

  // via facebook
  const fbSignUp = document.createElement('button');
  fbSignUp.setAttribute('id', 'fb-signup');
  fbSignUp.setAttribute('class', 'button-fb');
  fbSignUp.textContent = 'Registrarse con Facebook';

  // via correo
  const mailSignUp = document.createElement('button');
  mailSignUp.setAttribute('id', 'mail-signup');
  mailSignUp.setAttribute('class', 'button-mail');
  mailSignUp.textContent = 'Registrarse con correo';
  mailSignUp.addEventListener('click', () => onNavigate('/MainLogin'));

  // add botones al container, container a div global
  signUpButtons.append(gmailSignUp, fbSignUp, mailSignUp);
  registerDiv.append(signUpButtons);

  // cuenta existente
  const yesAccount = document.createElement('p');
  yesAccount.textContent = '¿Ya tienes cuenta?';
  const betterLogin = document.createElement('a');
  betterLogin.textContent = 'Ingresa';
  betterLogin.href = '/Login';
  registerDiv.append(yesAccount, betterLogin);

  // go back landing
  const goLandingButton = document.createElement('button');
  goLandingButton.textContent = 'Regresar al inicio';

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  registerDiv.appendChild(goLandingButton);

  return registerDiv;
};
