/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const bienvenida = () => {
  const bienvenidaDiv = document.createElement('div');
  const imagenLogo = `
    <div class="img" id="logoDuckyPets">
      <img id="logo" src="imagenes/DuckyPets.png" alt="">
      <img id="imgBienvenida" src="imagenes/married-couple-with-dog.jpg" alt="">
    </div>`;
  bienvenidaDiv.insertAdjacentHTML('beforeend', imagenLogo);

  // Botones de acceso

  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('id', 'btnRegister');

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'btnLogin');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Iniciar Sesion';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  bienvenidaDiv.appendChild(buttonRegister);
  bienvenidaDiv.appendChild(buttonLogin);

  return bienvenidaDiv;
};
