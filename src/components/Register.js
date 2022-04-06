/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

// registro
export const SignUp = () => {
  const [registerDiv, logo, mainImg, registerH2] = createElements('div', 'img', 'img', 'h2');
  registerH2.textContent = 'Registrarse';
  logo.src = 'imagenes/DuckyPets.png';
  mainImg.src = 'imagenes/married-couple-with-dog.jpg';
  registerDiv.append(logo, mainImg, registerH2);

  // container botones registro
  const [signUpButtons, gmailSignUp, mailSignUp] = createElements('div', 'button', 'button');

  // via gmail
  gmailSignUp.setAttribute('id', 'gmail-signup');
  gmailSignUp.setAttribute('class', 'button-gmail');
  gmailSignUp.textContent = 'Registrarse con Gmail';

  // via correo
  mailSignUp.setAttribute('id', 'mail-signup');
  mailSignUp.setAttribute('class', 'button-mail');
  mailSignUp.textContent = 'Registrarse con correo';
  mailSignUp.addEventListener('click', () => onNavigate('/RegisterEmail'));

  // add botones al container, container a div global
  signUpButtons.append(gmailSignUp, mailSignUp);
  registerDiv.append(signUpButtons);

  // cuenta existente

  const [yesAccount, betterLogin] = createElements('p', 'a');
  yesAccount.textContent = '¿Ya tienes cuenta?';

  betterLogin.textContent = 'Ingresa';
  betterLogin.href = '/Login';
  registerDiv.append(yesAccount, betterLogin);

  // go back landing
  const goLandingButton = document.createElement('button');
  goLandingButton.textContent = 'Regresar al inicio';
  goLandingButton.setAttribute('class', 'button-go-landing');
  goLandingButton.setAttribute('id', 'btn-go-landing');

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  registerDiv.appendChild(goLandingButton);

  return registerDiv;
};
