/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const forgotPassword = () => {
  const forgotDiv = document.createElement('div');
  forgotDiv.textContent = '¿Olvidaste tu contraseña?';
  forgotDiv.textContent = 'Recupera tu contraseña con tu correo electrónico';
  const inputForgotPassword = document.createElement('input');
  const buttonForgotPassword = document.createElement('button');

  buttonForgotPassword.textContent = 'Enviar';

  buttonForgotPassword.addEventListener('click', () => onNavigate('/forgot'));

  forgotDiv.appendChild(buttonForgotPassword);
  forgotDiv.appendChild(inputForgotPassword);

  return forgotDiv;
};
