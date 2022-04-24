/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.textContent = 'Bienvenido al Login';
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
  loginDiv.className = 'conatainerHome';
  buttonHome.className = 'buttonHome';
  image.className = 'img-responsive';
  image.src = 'img/cuyLog.png';
  titleRedSocial.innerText = 'CUY VIAJERO';
  buttonHome.textContent = 'Regresar al home';
  buttonGetInto.id = 'GetInto';
  buttonGetInto.textContent = 'Iniciar sesión';

  loginDiv.appendChild(titleRedSocial);
  loginDiv.appendChild(image);
  loginDiv.appendChild(inputName);
  loginDiv.appendChild(inputPassword);
  loginDiv.appendChild(buttonGetInto);
  loginDiv.appendChild(buttonHome);

  buttonHome.addEventListener('click', () => onNavigate('/'));

  // eslint-disable-next-line padded-blocks
  return loginDiv;

};