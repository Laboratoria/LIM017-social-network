/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

// login x correo
// using Pascal Case for declaring components as a good convention
export const MainLogin = () => {
  const mainLoginDiv = document.createElement('div');
  mainLoginDiv.id = 'main-div';
  const [imgContainer, logo, mainImg] = createElements('div', 'img', 'img');
  logo.src = 'imagenes/DuckyPets.png';
  mainImg.src = 'imagenes/married-couple-with-dog.jpg';
  imgContainer.append(logo, mainImg);
  mainLoginDiv.appendChild(imgContainer);

  const inputContainer = document.createElement('div');
  const [loginMsg, emailText, emailInput] = createElements('h3', 'label', 'input');
  loginMsg.textContent = 'Ingresa a tu cuenta';
  emailText.textContent = 'Correo Electrónico:';
  emailInput.placeholder = 'ejemplo@email.com';
  inputContainer.append(loginMsg, emailText, emailInput);

  const [passwordText, passwordInput] = createElements('label', 'input');
  passwordText.textContent = 'Contraseña:';
  passwordInput.placeholder = 'cont*******';
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
