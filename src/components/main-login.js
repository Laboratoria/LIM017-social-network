/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

// using Pascal Case for declaring components as a good convention
export const MainLogin = () => {
  const mainLoginDiv = document.createElement('div');
  const loginH2 = document.createElement('h2');
  loginH2.textContent = 'Login';
  const loginMsg = document.createElement('p');
  loginMsg.textContent = 'Ingresa a tu cuenta';
  mainLoginDiv.append(loginH2, loginMsg);

  const inputContainer = document.createElement('div');
  const emailInput = document.createElement('input');
  emailInput.placeholder = 'correo electrónico';
  const passwordInput = document.createElement('input');
  passwordInput.placeholder = 'contraseña';
  const forgotPassword = document.createElement('a');
  const loginBtn = document.createElement('button');
  loginBtn.textContent = 'Iniciar sesión';
  inputContainer.append(emailInput, passwordInput, loginBtn, forgotPassword);
  const otherBtnContainer = document.createElement('div');
  const googleBtn = document.createElement('button');
  googleBtn.textContent = 'Ingresar con Google';
  const fbButton = document.createElement('button');
  fbButton.textContent = 'Ingresar con Facebook';
  otherBtnContainer.append(googleBtn, fbButton);
  mainLoginDiv.append(inputContainer, otherBtnContainer);

  const buttonBienvenida = document.createElement('button');
  buttonBienvenida.textContent = 'Regresar al inicio';

  buttonBienvenida.addEventListener('click', () => onNavigate('/'));
  otherBtnContainer.appendChild(buttonBienvenida);

  return mainLoginDiv;
};
