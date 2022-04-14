/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido al Login';
  const buttonHome = document.createElement('button');
  const inputName = document.createElement('input');
  const inputPassaword = document.createElement('input');
  const titleRedSocial = document.createElement('h1');
  const image = document.createElement('img');

  inputName.id = 'inputName';
  titleRedSocial.className = 'titleRedSocial';
  inputName.placeholder = 'Ingrese nombre Completo';
  inputPassaword.placeholder = 'Ingrese Contraseña';
  inputPassaword.id = 'inputPassaword';
  buttonHome.className = 'buttonHome';
  image.className = 'img-responsive';
  image.src = 'img/cuy.png';
  titleRedSocial.innerText = 'Cuy Viajero';
  buttonHome.textContent = 'Regresar al Home';

  HomeDiv.appendChild(titleRedSocial);
  HomeDiv.appendChild(image);
  HomeDiv.appendChild(inputName);
  HomeDiv.appendChild(inputPassaword);
  HomeDiv.appendChild(buttonHome);

  buttonHome.addEventListener('click', () => onNavigate('/'));

  // eslint-disable-next-line padded-blocks
  return HomeDiv;

};