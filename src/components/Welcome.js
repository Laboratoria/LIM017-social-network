/* -------VISTA WELCOME  25/04/2022 ----------- */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/application/controller.js';

export const Welcome = () => {
  const welcome = `
  <section class='text-container'>
    <h1>CUY VIAJERO</h1>
    <div style="position: relative; width: 100%; height: 0; padding-top: 177.7778%;
    padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
    border-radius: 8px; will-change: transform;">
     <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
       src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE_kOx9JG4&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
     </iframe>
   </div>
   <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE_kOx9JG4&#x2F;watch?utm_content=DAE_kOx9JG4&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Bienvenido a El Cuy viajero</a>
  <p class='welcomeText'>Inicia tu próximo viaje con nosotros</p>
    
        <button id='buttonRegister'> Registrate</button>
        <button id='buttonLogin'> Usuario y contraseña </button>
    </section>
    `;

  const viewWelcomePage = document.createElement('div');
  viewWelcomePage.className = 'viewContainer';
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