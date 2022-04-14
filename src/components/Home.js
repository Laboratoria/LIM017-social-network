/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido a';
  const image = document.createElement('img');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const titleRedSocial = document.createElement('h1');
  const pText = document.createElement('p');

  titleRedSocial.className = 'titleRedSocial';
  HomeDiv.className = 'homeDiv';
  image.className = 'img-responsive';
  image.src = 'img/cuy.png';
  pText.id = 'pText';

  buttonRegister.id = 'buttonRegister';
  buttonLogin.id = 'buttonLogin';
  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Usuario y contraseña';
  titleRedSocial.innerText = 'Cuy viajero';
  pText.innerText = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(titleRedSocial);
  HomeDiv.appendChild(image);
  HomeDiv.appendChild(pText);
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonRegister);

  return HomeDiv;
};
