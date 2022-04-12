/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido al Registro';
  const buttonHome = document.createElement('button');
  const titleRedSocial = document.createElement('h1');
  const inputName = document.createElement('input');
  const inputPassaword = document.createElement('input');
  const inputCorreo = document.createElement('input');
  const image = document.createElement('img');

  inputCorreo.placeholder = 'Ingrese correo electronico';
  inputName.placeholder = 'Ingrese nombre Completo';
  inputPassaword.placeholder = 'Crea tu Contraseña';
  inputCorreo.id = 'inputCorreo';
  inputName.id = 'inputName';
  inputPassaword.id = 'inputPassaword';
  buttonHome.className = 'buttonHome';
  image.className = 'img-responsive';
  image.src = 'img/cuy.png';
  buttonHome.textContent = 'Regresar al Home';
  titleRedSocial.className = 'titleRedSocial';
  titleRedSocial.innerText = 'Cuy Viajero';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(titleRedSocial);
  HomeDiv.appendChild(image);
  HomeDiv.appendChild(inputName);
  HomeDiv.appendChild(inputCorreo);
  HomeDiv.appendChild(inputPassaword);
  HomeDiv.appendChild(buttonHome);

 return HomeDiv;

// eslint-disable-next-line eol-last
};