/* -------VISTA WELCOME  25/04/2022 ----------- */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/application/controller.js';

export const Welcome = () => {
  const welcome = `
  <section class='conatinerWelcome'>
  <section class='text-container-'>
  <div>
  <video autoplay muted loop id='video-phone'>
  <source src='img/cuy-video.mp4' type='video/mp4'>
  </video>
  </div>
  <div id='buttomWelcome'>
  <button id='buttonRegister'> Registrate</button>
  <button id='buttonLogin'> Inicia sesión </button>
  </div>
    </section>
    </section>
    `;

  const viewWelcomePage = document.createElement('div');
  viewWelcomePage.className = 'viewContainerWelcome';
  viewWelcomePage.innerHTML = welcome;

  viewWelcomePage
    .querySelector('#buttonRegister')
    .addEventListener('click', () => onNavigate('/register'));
  viewWelcomePage
    .querySelector('#buttonLogin')
    .addEventListener('click', () => onNavigate('/login'));

  return viewWelcomePage;
// eslint-disable-next-line eol-last
};