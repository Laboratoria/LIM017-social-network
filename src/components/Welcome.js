/* -------VISTA WELCOME  25/04/2022 ----------- */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/application/controller.js';

export const Welcome = () => {
  const welcome = `
    <section class ='viewContainer'>
      <h1>Cuy viajero</h1>
      <p>Tu red social de viajes favorita!</p>
      <img class='img-responsive' src='img/cuyLog.png'>
      <p>Inicia sesión para continuar</p>
      <div>
        <button id='buttonRegister'> Registrate</button>
        <button id='buttonLogin'> Usuario y contraseña </button>
      </div>
    </section>
    `;
  const viewWelcomePage = document.createElement('div');
  viewWelcomePage.setAttribute('class', 'sectionDiv');
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