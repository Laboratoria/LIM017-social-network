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
  logo.src = 'imagenes/DuckyPets.png';
  mainImg.src = 'imagenes/married-couple-with-dog.jpg';
  registerDiv.append(logo, mainImg, registerH2);

  // container botones registro
  const [signUpButtons, gmailSignUp, fbSignUp, mailSignUp] = createElements('div', 'button', 'button', 'button');

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

  // via facebook
  fbSignUp.setAttribute('id', 'fb-signup');
  fbSignUp.setAttribute('class', 'button-fb');
  fbSignUp.textContent = 'Registrarse con Facebook';

  // via correo
  mailSignUp.setAttribute('id', 'mail-signup');
  mailSignUp.setAttribute('class', 'button-mail');
  mailSignUp.textContent = 'Registrarse con correo';
  mailSignUp.addEventListener('click', () => onNavigate('/MainLogin'));

  // add botones al container, container a div global
  signUpButtons.append(gmailSignUp, fbSignUp, mailSignUp);
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
  goLandingButton.setAttribute('class', 'button-goLanding');
  goLandingButton.setAttribute('id', 'btn-goLanding');

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  registerDiv.appendChild(goLandingButton);

  return registerDiv;
};
