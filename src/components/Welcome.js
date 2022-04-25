/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Welcome = () => {
  const welcome = `
    <section class ='conatainerHome'>
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
  const welcomePage = document.createElement('div');
  welcomePage.setAttribute('class', 'sectionDiv');
  welcomePage.innerHTML = welcome;

  welcomePage
    .querySelector('#buttonRegister')
    .addEventListener('click', () => onNavigate('/register'));
  welcomePage
    .querySelector('#buttonLogin')
    .addEventListener('click', () => onNavigate('/login'));
 
  return welcomePage;
// eslint-disable-next-line eol-last
};
