/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
// import { registerWithEmail } from '../lib/application/authFirebase.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido al Registro';
  const buttonHome = document.createElement('button');
  const titleRedSocial = document.createElement('h1');
  const inputPassaword = document.createElement('input');
  const inputCorreo = document.createElement('input');
  const image = document.createElement('img');
  const buttonUsuario = document.createElement('button');

  inputCorreo.placeholder = 'Ingrese correo electrónico';
  inputPassaword.placeholder = 'Crea tu contraseña';
  inputCorreo.id = 'inputCorreo';
  inputPassaword.id = 'inputPassaword';
  buttonHome.className = 'buttonHome';
  image.className = 'img-responsive';
  image.src = 'img/cuy.png';
  buttonHome.textContent = 'Regresar al Home';
  titleRedSocial.className = 'titleRedSocial';
  titleRedSocial.innerText = 'Cuy Viajero';
  buttonUsuario.id = 'usuarioBtn';
  buttonUsuario.textContent = 'Crear usuario';

  buttonHome.addEventListener('click', () => onNavigate('/'));
  buttonUsuario.addEventListener('click', () => {
    const passawordValue = inputPassaword.value;
    console.log(passawordValue);
    const correoValue = inputCorreo.value;
    console.log(correoValue);
    // registerWithEmail(correoValue, passawordValue);

  });

  HomeDiv.appendChild(titleRedSocial);
  HomeDiv.appendChild(image);
  HomeDiv.appendChild(inputCorreo);
  HomeDiv.appendChild(inputPassaword);
  HomeDiv.appendChild(buttonUsuario);
  HomeDiv.appendChild(buttonHome);

 return HomeDiv;

// eslint-disable-next-line eol-last
};