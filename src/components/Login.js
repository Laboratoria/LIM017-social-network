/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido al Login';
  const buttonHome = document.createElement('button');
  const inputName = document.createElement('input');
  const inputPassword = document.createElement('input');
  const titleRedSocial = document.createElement('h1');
  const image = document.createElement('img');
  const buttonGetInto = document.createElement('button');

  inputName.id = 'inputName';
  titleRedSocial.className = 'titleRedSocial';
  inputName.placeholder = 'Nombre de usuario';
  inputPassword.placeholder = 'Ingrese contraseña';
  inputPassword.id = 'inputPassword';
  buttonHome.className = 'buttonHome';
  image.className = 'img-responsive';
  image.src = 'img/cuy.png';
  titleRedSocial.innerText = 'Cuy viajero';
  buttonHome.textContent = 'Regresar al home';
  buttonGetInto.id = 'GetInto';
  buttonGetInto.textContent = 'Iniciar sesión';

  HomeDiv.appendChild(titleRedSocial);
  HomeDiv.appendChild(image);
  HomeDiv.appendChild(inputName);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(buttonGetInto);
  HomeDiv.appendChild(buttonHome);

  buttonHome.addEventListener('click', () => onNavigate('/'));

  // eslint-disable-next-line padded-blocks
  return HomeDiv;

};