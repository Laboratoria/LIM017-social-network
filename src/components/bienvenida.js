/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const bienvenida = () => {
  const bienvenidaDiv = document.createElement('div');
  const list = `
<div class="img">
<img src="DuckyPets.png" alt="">
</div>`;
  bienvenidaDiv.insertAdjacentHTML('beforeend', list);
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
