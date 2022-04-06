/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

// login x correo
// using Pascal Case for declaring components as a good convention
export const MainLogin = () => {
  const mainLoginDiv = document.createElement('div');

  mainLoginDiv.id = 'main-login-div';
  const [loginMsg, mainImg] = createElements('h2', 'img');

  loginMsg.textContent = 'Ingresa a tu cuenta';
  loginMsg.id = 'msg-main-h2';
  loginMsg.className = 'text-start-h2';
  mainImg.src = 'imagenes/pajarito.jpg';
  mainImg.id = 'img-main';
  mainImg.className = 'img-bienvenida';
  mainLoginDiv.append(loginMsg, mainImg);

  const inputContainer = document.createElement('div');
  inputContainer.id = 'div-input-container';
  const [emailText, emailInput] = createElements('label', 'input');

  emailText.textContent = 'Correo Electrónico:';
  emailText.id = 'label-text-email';
  emailInput.placeholder = 'ejemplo@email.com';
  emailInput.id = 'input-email';
  inputContainer.append(emailText, emailInput);

  const [passwordText, passwordInput] = createElements('label', 'input');
  passwordText.textContent = 'Contraseña:';
  passwordText.id = 'label-password';
  passwordInput.placeholder = 'cont*******';
  passwordInput.id = 'input-password-h2';
  inputContainer.append(passwordText, passwordInput);

  const [loginBtn, resetPassword] = createElements('button', 'a');
  loginBtn.textContent = 'Iniciar sesión';

  resetPassword.textContent = '¿Olvidaste tu contraseña?';
  resetPassword.href = '/ForgotPasword';

  inputContainer.append(loginBtn, resetPassword);

  const otherBtnContainer = document.createElement('div');
  otherBtnContainer.id = 'div-other-btn-container';
  otherBtnContainer.className = 'BoxTypeLogin';

  const [googleBtn, fbButton] = createElements('button', 'button');
  googleBtn.textContent = 'Ingresar con Google';
  googleBtn.setAttribute('class', 'button-gmail');
  fbButton.textContent = 'Ingresar con Facebook';
  fbButton.setAttribute('class', 'button-fb');

  const registerContainer = document.createElement('div');
  registerContainer.id = 'div-register-container';

  const [noAccount, noAccountRegister] = createElements('p', 'a');
  noAccount.textContent = '¿No tienes cuenta?';

  noAccountRegister.textContent = 'Registrate';
  noAccountRegister.href = '/Register';
  registerContainer.append(noAccount, noAccountRegister);
  otherBtnContainer.append(googleBtn, fbButton);
  mainLoginDiv.append(inputContainer, otherBtnContainer, registerContainer);

  const buttonBienvenida = document.createElement('button');
  buttonBienvenida.setAttribute('id', 'button-go-Back');
  buttonBienvenida.textContent = 'Regresar al inicio';

  buttonBienvenida.addEventListener('click', () => onNavigate('/'));
  otherBtnContainer.appendChild(buttonBienvenida);

  return mainLoginDiv;
};
