/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
// import { doc, getDoc, firestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { CreateAccount, createAccountByGoogle } from '../Firebase/auth.js';
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';
import { PasswordInput } from './PasswordInput.js';

// registro
export const SignUp = () => {
  const [
    registerDiv,
    logo,
    mainImg,
    registerH2,
  ] = createElements('div', 'img', 'img', 'h2');
  registerDiv.id = 'register-div-global';
  registerH2.textContent = 'Registrarse';
  registerH2.className = 'text-start-h2';
  logo.src = 'imagenes/DuckyPets-con-transparencia-achicado.png';
  logo.className = 'logo';
  logo.id = 'logo-register';
  mainImg.src = 'imagenes/3-personas-con-mascotas.png';
  mainImg.className = 'img-bienvenida2';
  registerDiv.append(logo, mainImg, registerH2);

  const [
    inputContainer,
    registerEmail,
    submitBtn,
    lineImg,
  ] = createElements(
    'form',
    'input',
    'button',
    'img',
  );

  inputContainer.className = 'form-input-container';
  registerEmail.id = 'register-email';
  registerEmail.className = 'inputs-register';
  registerEmail.type = 'email';
  registerEmail.placeholder = 'Ingresa tu correo';

  const registerPassword = PasswordInput({
    placeholder: 'Ingresa tu contraseña',
    id: 'register-password',
  });
  // registerPassword.className = 'inputs-register';

  const confirmPassword = PasswordInput({
    placeholder: 'Confirma tu contraseña',
    id: 'confirm-password',
  });
  // confirmPassword.className = 'inputs-register';

  submitBtn.id = 'submit-btn';
  submitBtn.className = 'submit-buttons';
  submitBtn.textContent = 'Registrarse';
  lineImg.className = 'line-img';
  lineImg.src = '#';

  inputContainer.append(
    registerEmail,
    registerPassword,
    confirmPassword,
    submitBtn,
  );
  registerDiv.append(inputContainer, lineImg);

  // Evento de registrar al usuario
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (registerPassword.value === confirmPassword.value) {
      CreateAccount(registerEmail.value, registerPassword.value);
      store({ email: registerEmail.value }, 'users');
      // window.location.href = '/Feed';
    } else {
      alert('Las contraseñas no coinciden');
    }
  });

  // Linea y contenedor OR
  const [lineContainer, line3, orParagraph, line4] = createElements('div', 'div', 'p', 'div');

  lineContainer.id = 'line-container';
  line3.className = 'solid-line';
  line3.id = 'line1';

  orParagraph.id = 'line-p';
  orParagraph.textContent = 'O';

  line4.className = 'solid-line';
  lineContainer.append(line3, orParagraph, line4);

  inputContainer.append(registerEmail, registerPassword, confirmPassword, submitBtn);
  registerDiv.append(inputContainer, lineContainer);

  // container botones registro
  const [signUpButton, gmailSignUp] = createElements('div', 'button', 'div');

  // via gmail
  gmailSignUp.id = 'gmail-signup';
  gmailSignUp.className = 'button-gmail';
  gmailSignUp.textContent = 'Registrarse con Gmail';

  gmailSignUp.id = 'gmail-login';
  gmailSignUp.className = 'button-gmail';
  gmailSignUp.textContent = 'Registrate con Gmail';
  gmailSignUp.addEventListener('click', () => {
    createAccountByGoogle();
    window.location.href = '/Feed';
  });

  // add botones al container, container a div global

  signUpButton.appendChild(gmailSignUp);
  signUpButton.setAttribute('class', 'container-button-signup');
  registerDiv.appendChild(signUpButton);

  // Already have and account

  const [container, yesAccount, betterLogin] = createElements('div', 'p', 'a');
  container.id = 'content-text';
  yesAccount.textContent = '¿Ya tienes cuenta?';
  yesAccount.id = 'p-yes-account';
  yesAccount.className = 'yes-account';

  betterLogin.textContent = 'Ingresa';
  betterLogin.id = 'a-better-login';
  betterLogin.className = 'better-login';
  betterLogin.href = '/Login';
  container.append(yesAccount, betterLogin);
  registerDiv.appendChild(container);

  // go back landing
  const goLandingButton = document.createElement('button');
  goLandingButton.textContent = 'Regresar al inicio';
  goLandingButton.className = 'button-go-landing';
  goLandingButton.id = 'btn-go-landing';

  // const goLandingButton = document.createElement('button');
  // goLandingButton.textContent = 'Regresar al inicio';
  // goLandingButton.setAttribute('class', 'button-go-landing');
  // goLandingButton.setAttribute('id', 'btn-go-landing');

  // goLandingButton.addEventListener('click', () => onNavigate('/'));
  // registerDiv.appendChild(goLandingButton);

  return registerDiv;
};
