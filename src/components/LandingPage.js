/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

export const LandingView = () => {
  const landingDiv = document.createElement('div');
  landingDiv.className = 'landing-div-global';
  const imgLogo = `
      <img id="landing-logo" src="imagenes/DuckyPets-con-transparencia-achicado.png" alt="">
      <img class="img-bienvenida" src="imagenes/instantanea-original-transparente.png" alt="">
      `;
  landingDiv.insertAdjacentHTML('beforeend', imgLogo);

  // Botones de acceso
  const [containerLandingBtn, buttonRegister, buttonLogin] = createElements('div', 'button', 'button');
  buttonRegister.id = 'btn-register';
  buttonRegister.className = 'btns-landing';
  buttonRegister.textContent = 'Regístrate';
  buttonRegister.addEventListener('click', () => onNavigate('/Register'));

  buttonLogin.id = 'btn-login';
  buttonLogin.className = 'btns-landing';
  buttonLogin.textContent = 'Iniciar Sesion';
  buttonLogin.addEventListener('click', () => onNavigate('/Login'));

  containerLandingBtn.append(buttonRegister, buttonLogin);
  containerLandingBtn.className = 'btn-container';
  landingDiv.appendChild(containerLandingBtn);

  return landingDiv;
};
