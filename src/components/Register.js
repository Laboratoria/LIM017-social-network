/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
// import { doc, getDoc, firestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import {
  CreateAccount, createAccountByGoogle,
} from '../Firebase/auth.js';
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

// registro
export const SignUp = () => {
  const [registerDiv, logo, mainImg, registerH2] = createElements('div', 'img', 'img', 'h2');
  registerH2.textContent = 'Registrarse';
  registerH2.className = 'text-start-h2';
  logo.src = 'imagenes/DuckyPets-con-transparencia-achicado.png';
  logo.setAttribute('class', 'logo');
  logo.setAttribute('id', 'logo-register');
  mainImg.src = 'imagenes/3-personas-con-mascotas.png';
  mainImg.setAttribute('class', 'img-bienvenida2');
  registerDiv.append(logo, mainImg, registerH2);
  registerDiv.setAttribute('id', 'register-div-global');

  const [inputContainer, registerEmail, registerPassword, confirmPassword, submitBtn, lineImg] = createElements('form', 'input', 'input', 'input', 'button', 'img');

  inputContainer.className = 'form-input-container';
  registerEmail.setAttribute('id', 'register-email');
  registerEmail.setAttribute('class', 'inputs-register');
  registerEmail.setAttribute('type', 'email');
  registerEmail.setAttribute('placeholder', 'Ingresa tu correo');

  registerPassword.setAttribute('id', 'register-password');
  registerPassword.setAttribute('class', 'inputs-register');
  registerPassword.setAttribute('type', 'password');
  registerPassword.setAttribute('placeholder', 'Ingresa tu contraseña');

  confirmPassword.setAttribute('id', 'confirm-password');
  confirmPassword.setAttribute('class', 'inputs-register');
  confirmPassword.setAttribute('type', 'password');
  confirmPassword.setAttribute('placeholder', 'Confirma tu contraseña');
  submitBtn.id = 'submit-btn';
  submitBtn.className = 'submit-buttons';
  submitBtn.textContent = 'Registrarse';
  lineImg.className = 'line-img';
  lineImg.src = '#';

  inputContainer.append(registerEmail, registerPassword, confirmPassword, submitBtn);
  registerDiv.append(inputContainer, lineImg);

  // Evento de registrar al usuario
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value;
    CreateAccount(email, password);
  });

  // container botones registro
  const [signUpButtons, gmailSignUp, divParagraphError] = createElements('div', 'button', 'div');


  // via gmail
  gmailSignUp.setAttribute('id', 'gmail-signup');
  gmailSignUp.setAttribute('class', 'button-gmail');
  gmailSignUp.textContent = 'Registrarse con Gmail';

  gmailSignUp.setAttribute('id', 'gmail-login');
  gmailSignUp.setAttribute('class', 'button-gmail');
  gmailSignUp.textContent = 'Registrate con Gmail';
  gmailSignUp.addEventListener('click', () => {
    createAccountByGoogle();
  });

  // add botones al container, container a div global

  signUpButtons.appendChild(gmailSignUp);
  signUpButtons.setAttribute('class', 'container-buttons-login');


  registerDiv.append(signUpButtons, divParagraphError);
  divParagraphError.setAttribute('id', 'error');

  // cuenta existente

  const [container, yesAccount, betterLogin] = createElements('div', 'p', 'a');
  yesAccount.textContent = '¿Ya tienes cuenta?';
  yesAccount.setAttribute('id', 'p-yes-account');
  yesAccount.setAttribute('class', 'yes-account');

  betterLogin.textContent = 'Ingresa';
  betterLogin.setAttribute('id', 'a-better-login');
  betterLogin.setAttribute('class', 'better-login');
  betterLogin.href = '/Login';
  container.append(yesAccount, betterLogin);
  registerDiv.appendChild(container);

  // go back landing
  const goLandingButton = document.createElement('button');
  goLandingButton.textContent = 'Regresar al inicio';
  goLandingButton.setAttribute('class', 'button-go-landing');
  goLandingButton.setAttribute('id', 'btn-go-landing');

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  registerDiv.appendChild(goLandingButton);

  return registerDiv;
};
