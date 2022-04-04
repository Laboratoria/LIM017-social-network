/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

// login x correo
// using Pascal Case for declaring components as a good convention
export const MainLogin = () => {
  const mainLoginDiv = document.createElement('div');
  mainLoginDiv.id = 'main-div';
  const [logo, mainImg] = createElements('img', 'img');
  logo.src = 'imagenes/DuckyPets.png';
  mainImg.src = 'imagenes/married-couple-with-dog.jpg';
  const loginMsg = document.createElement('h3');
  loginMsg.textContent = 'Ingresa a tu cuenta';
  mainLoginDiv.append(logo, mainImg, loginMsg);

  const inputContainer = document.createElement('div');
  const [emailText, emailInput] = createElements('label', 'input');
  emailText.textContent = 'Correo Electrónico:';
  emailInput.placeholder = 'ejemplo@email.com';
  inputContainer.append(emailText, emailInput);

  const [passwordText, passwordInput] = createElements('label', 'input');
  passwordText.textContent = 'Contraseña:';
  passwordInput.placeholder = ' xxxxxx ';
  inputContainer.append(passwordText, passwordInput);

  const [loginBtn, resetPassword] = createElements('button', 'a');
  loginBtn.textContent = 'Iniciar sesión';

  resetPassword.textContent = '¿Olvidaste tu contraseña?';
  resetPassword.href = '/ForgotPasword';

  inputContainer.append(loginBtn, resetPassword);

  const otherBtnContainer = document.createElement('div');

  const [googleBtn, fbButton] = createElements('button', 'button');
  googleBtn.textContent = 'Ingresar con Google';
  fbButton.textContent = 'Ingresar con Facebook';

  const registerContainer = document.createElement('div');

  const [noAccount, noAccountRegister] = createElements('p', 'a');
  noAccount.textContent = '¿No tienes cuenta?';

  noAccountRegister.textContent = 'Registrate';
  noAccountRegister.href = '/Register';
  registerContainer.append(noAccount, noAccountRegister);
  otherBtnContainer.append(googleBtn, fbButton);
  mainLoginDiv.append(inputContainer, otherBtnContainer, registerContainer);

  const buttonBienvenida = document.createElement('button');
  buttonBienvenida.textContent = 'Regresar al inicio';

  buttonBienvenida.addEventListener('click', () => onNavigate('/'));
  otherBtnContainer.appendChild(buttonBienvenida);

  return mainLoginDiv;
};
