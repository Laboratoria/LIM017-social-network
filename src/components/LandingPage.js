/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

export const LandingView = () => {
  const landingDiv = document.createElement('div');
  landingDiv.className = 'landing-div-global';
  const imgLogo = `
      <img class="logo" src="imagenes/DuckyPets-achicado.png" alt="">
      <img class="img-bienvenida" src="imagenes/instantanea-pink.png" alt="">
      `;
  landingDiv.insertAdjacentHTML('beforeend', imgLogo);

  // Botones de acceso
  const [buttonRegister, buttonLogin] = createElements('button', 'button');
  buttonRegister.id = 'btn-register';
  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/Register'));

  buttonLogin.id = 'btn-login';
  buttonLogin.textContent = 'Iniciar Sesion';
  buttonLogin.addEventListener('click', () => onNavigate('/Login'));

  landingDiv.append(buttonRegister, buttonLogin);

  return landingDiv;
};
