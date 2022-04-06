/* eslint-disable import/no-cycle */
import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { auth, firestore, provider } from '../Firebase/init.js';
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

// registro
export const SignUp = () => {
  const [registerDiv, logo, mainImg, registerH2] = createElements('div', 'img', 'img', 'h2');
  registerH2.textContent = 'Registrarse';
  registerH2.className = 'text-start-h2';
  logo.src = 'imagenes/DuckyPets-achicado.png';
  logo.setAttribute('class', 'logo');
  mainImg.src = 'imagenes/marrons-pets.jpg';
  mainImg.setAttribute('class', 'img-bienvenida');
  registerDiv.append(logo, mainImg, registerH2);
  registerDiv.setAttribute('id', 'register-div-global');

  // container botones registro

  const [signUpButtons, gmailSignUp, mailSignUp] = createElements('div', 'button', 'button');

  // via gmail
  gmailSignUp.setAttribute('id', 'gmail-signup');
  gmailSignUp.setAttribute('class', 'button-gmail');
  gmailSignUp.textContent = 'Registrarse con Gmail';


  gmailSignUp.setAttribute('id', 'gmail-login');
  gmailSignUp.setAttribute('class', 'button-gmail');
  gmailSignUp.textContent = 'Ingresar con Gmail';
  gmailSignUp.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const docRef = doc(firestore, 'users', 'R7AVhvPeG2Oee195PSBC');
        getDoc(docRef).then((result) => {
          console.log(result);
        });
      });
  });


  // via correo
  mailSignUp.setAttribute('id', 'mail-signup');
  mailSignUp.setAttribute('class', 'button-mail');
  mailSignUp.textContent = 'Registrarse con correo';
  mailSignUp.addEventListener('click', () => onNavigate('/RegisterEmail'));

  // add botones al container, container a div global

  signUpButtons.append(gmailSignUp, mailSignUp);
  signUpButtons.setAttribute('class', 'conteiner-buttons-logins');

  registerDiv.append(signUpButtons);

  // cuenta existente

  const [yesAccount, betterLogin] = createElements('p', 'a');
  yesAccount.textContent = '¿Ya tienes cuenta?';
  yesAccount.setAttribute('id', 'p-yes-account');

  betterLogin.textContent = 'Ingresa';
  betterLogin.setAttribute('id', 'a-better-login');
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
