import { onNavigate } from '../main.js';

export const bienvenida = () => {
  const bienvenidaDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Iniciar Sesion';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  bienvenidaDiv.appendChild(buttonRegister);
  bienvenidaDiv.appendChild(buttonLogin);

  return bienvenidaDiv;
};
