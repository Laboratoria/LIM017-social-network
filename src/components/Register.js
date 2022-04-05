/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
// registro
export const SignUp = () => {
  const registerDiv = document.createElement('div');
  registerDiv.setAttribute('id', 'div-register');
  const registerH2 = document.createElement('h2');
  const imgWelcomes = document.createElement('img');
  imgWelcomes.setAttribute('class', 'imgBienvenida');
  imgWelcomes.src = 'imagenes/married-couple-with-dog.jpg';
  registerH2.textContent = 'Regístrate';
  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo');
  logo.src = 'imagenes/DuckyPets.png';
  registerDiv.append(logo, imgWelcomes, registerH2);

  // container botones registro
  const signUpButtons = document.createElement('div');
  signUpButtons.setAttribute('class', 'BoxTypeLogin');

  // via gmail
  const gmailSignUp = document.createElement('button');
  gmailSignUp.setAttribute('id', 'gmail-signup');
  gmailSignUp.setAttribute('class', 'button-gmail');
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
  yesAccount.setAttribute('id', 'p-yes-account');
  yesAccount.textContent = '¿Ya tienes cuenta?';
  const betterLogin = document.createElement('a');
  betterLogin.setAttribute('id', 'a-betterLogin');
  betterLogin.textContent = 'Ingresa';
  betterLogin.href = '/Login';
  registerDiv.append(yesAccount, betterLogin);

  // go back landing
  const goLandingButton = document.createElement('button');
  goLandingButton.textContent = 'Regresar al inicio';
  goLandingButton.setAttribute('class', 'button-goLanding');
  goLandingButton.setAttribute('id', 'btn-goLanding');

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  registerDiv.appendChild(goLandingButton);

  return registerDiv;
};
