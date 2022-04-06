/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

// login x correo
// using Pascal Case for declaring components as a good convention
export const MainLogin = () => {
  const mainLoginDiv = document.createElement('div');

  mainLoginDiv.id = 'main-login-div';
  const [logo, mainImg] = createElements('img', 'img');

  logo.src = 'imagenes/DuckyPets.png';
  logo.id = 'img-logo';
  logo.className = 'logo';
  mainImg.src = 'imagenes/married-couple-with-dog.jpg';
  mainImg.id = 'img-main';
  mainImg.className = 'imgBienvenida';
  mainLoginDiv.append(logo, mainImg);

  const inputContainer = document.createElement('div');
  inputContainer.id = 'div-input-container';
  const [loginMsg, emailText, emailInput] = createElements('h4', 'label', 'input');
  loginMsg.textContent = 'Ingresa a tu cuenta';

  emailText.textContent = 'Correo Electrónico:';
  emailText.id = 'label-text-email';
  emailInput.placeholder = 'ejemplo@email.com';
  emailInput.id = 'input-email';
  inputContainer.append(loginMsg, emailText, emailInput);

  const [passwordText, passwordInput] = createElements('label', 'input');
  passwordText.textContent = 'Contraseña:';
  passwordText.id = 'label-password';
  passwordInput.placeholder = 'cont*******';
  passwordInput.id = 'input-password-mainLogin';
  inputContainer.append(passwordText, passwordInput);

  const [loginBtn, resetPassword] = createElements('button', 'a');
  loginBtn.textContent = 'Iniciar sesión';

  resetPassword.textContent = '¿Olvidaste tu contraseña?';
  resetPassword.href = '/ForgotPasword';

  inputContainer.append(loginBtn, resetPassword);

  const otherBtnContainer = document.createElement('div');
  otherBtnContainer.id = 'div-other-btn-container';
  otherBtnContainer.className = 'box-type-login';

  const googleBtn = document.createElement('button');
  googleBtn.textContent = 'Ingresar con Google';
  googleBtn.class = 'button-gmail';

  const registerContainer = document.createElement('div');
  registerContainer.id = 'div-register-container';

  const [noAccount, noAccountRegister] = createElements('p', 'a');
  noAccount.textContent = '¿No tienes cuenta?';

  noAccountRegister.textContent = 'Registrate';
  noAccountRegister.href = '/Register';
  registerContainer.append(noAccount, noAccountRegister);
  otherBtnContainer.appendChild(googleBtn);
  mainLoginDiv.append(inputContainer, otherBtnContainer, registerContainer);

  const goBackBtn = document.createElement('button');
  goBackBtn.setAttribute('id', 'button-go-back');
  goBackBtn.textContent = 'Regresar al inicio';

  goBackBtn.addEventListener('click', () => onNavigate('/'));
  otherBtnContainer.appendChild(goBackBtn);

  return mainLoginDiv;
};
