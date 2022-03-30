/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const register = () => {
  const bienvenidaDiv = document.createElement('div');
  bienvenidaDiv.textContent = 'Bienvenida al registro';

  const buttonGmailRegister = document.createElement('button');
  buttonGmailRegister.setAttribute('id', 'btnGmailLogin');
  buttonGmailRegister.textContent = 'Registrarse con Gmail';

  const yesAccount = document.createElement('p');
  yesAccount.textContent = '¿Ya tienes cuenta?';
  bienvenidaDiv.appendChild(yesAccount);
  const yesAccountLogin = document.createElement('p');
  yesAccountLogin.textContent = 'Ingresa';
  yesAccountLogin.setAttribute('id', 'yesAccount');
  bienvenidaDiv.appendChild(yesAccountLogin);

  const buttonBienvenida = document.createElement('button');

  buttonBienvenida.textContent = 'Regresar al inicio';

  buttonBienvenida.addEventListener('click', () => onNavigate('/'));

  bienvenidaDiv.appendChild(buttonBienvenida);

  return bienvenidaDiv;
};
