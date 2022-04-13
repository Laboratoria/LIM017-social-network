/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
// import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { onNavigate } from '../main.js';
import { createAccountByGoogle, LoginByEmailPassword } from '../Firebase/auth.js';
import { createElements } from '../util.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.id = 'login-wrapper';
  const [logo, mainImg, textLogin] = createElements('img', 'img', 'h2');
  logo.src = 'imagenes/DuckyPets-con-transparencia-achicado.png';
  logo.id = 'login-logo';
  mainImg.src = 'imagenes/imgLogin-con-transparencia.png';
  mainImg.id = 'login-img';
  textLogin.textContent = 'Iniciar Sesion';
  textLogin.id = 'login-h2';
  loginDiv.append(logo, mainImg, textLogin);

  const [inputContainer, mailInput, passwordInput, loginButton] = createElements('div', 'input', 'input', 'button');
  inputContainer.id = 'form-login';
  mailInput.id = 'mail-input';
  mailInput.placeholder = 'Correo electrónico';
  passwordInput.id = 'password-input';
  passwordInput.placeholder = 'Contraseña';
  loginButton.textContent = 'Iniciar sesion';
  loginButton.id = 'login-btn';
  loginButton.className = 'submit-buttons';
  inputContainer.append(mailInput, passwordInput, loginButton);
  loginDiv.appendChild(inputContainer);

  // Intento de ingresar con correo y contraseña
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    LoginByEmailPassword(mailInput.value, passwordInput.value);
  });
  const [lineContainer, line1, orParagraph, line2] = createElements('div', 'div', 'p', 'div');
  lineContainer.id = 'line-container';
  line1.className = 'solid-line';
  line1.id = 'line1';
  orParagraph.id = 'line-p';
  orParagraph.textContent = 'O';
  line2.className = 'solid-line';
  lineContainer.append(line1, orParagraph, line2);
  loginDiv.appendChild(lineContainer);
  // container botones ingreso, botones
  const [loginButtons, gmailLogin, divErrorParagraph] = createElements('div', 'button', 'divErrorParagraph');
  loginButtons.id = 'login-btn-container';
  // via gmail
  gmailLogin.id = 'gmail-login';
  gmailLogin.className = 'button-gmail';
  gmailLogin.textContent = 'Ingresar con Gmail';
  gmailLogin.addEventListener('click', () => {
    createAccountByGoogle();
  });

  // add botones al container, container a div global
  loginButtons.appendChild(gmailLogin);

  loginDiv.append(loginButtons, divErrorParagraph);
  divErrorParagraph.id = 'error-login';

  // No tienes cuenta
  const [container2, resetPassword, noAccount, noAccountRegister] = createElements('div', 'a', 'p', 'a');
  container2.id = 'container2';
  resetPassword.textContent = '¿Olvidaste tu contraseña?';
  resetPassword.href = '/ForgotPasword';
  resetPassword.id = 'a-reset-password';
  noAccount.textContent = '¿No tienes cuenta?';
  noAccount.id = 'p-no-account';
  noAccountRegister.textContent = 'Registrate';
  noAccountRegister.href = '/Register';
  noAccountRegister.id = 'no-acc-register';
  container2.append(resetPassword, noAccount, noAccountRegister);
  loginDiv.appendChild(container2);
  // Boton de regresar a la bienvenida
  const goLandingButton = document.createElement('button');
  goLandingButton.id = 'go-landing-button';
  goLandingButton.textContent = 'home';

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  loginDiv.appendChild(goLandingButton);

  return loginDiv;
};
