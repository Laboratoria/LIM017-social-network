// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../lib/application/controller.js';
// eslint-disable-next-line import/no-cycle
import { signOff } from '../lib/application/authFirebase.js';

export const Home = () => {
  const homePage = `

      <header class="header">
      <div>

        <div><img class="logo" src="img/cuyMap.png" alt="" srcset="" </div>
        <div class='centerTitle'>
        <a href="" class="titleCuyViajero"> <strong>Cuy Viajero</strong></a>
        </div>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><a type="button" class='buttonNav' id='buttonNavStart'>Inicio</a></li>
          <li><a type="button" class='buttonNav' id='buttonNavProfile'>Perfil</a></li>
          <li><a type="button" class='buttonNav' id='singOutBttn'>Cerrar sesión</a></li>
        </ul>
       </header>
       <body>
       </body>
   `;
  const viewHomePage = document.createElement('div');
  viewHomePage.className = 'viewContainerHome';
  viewHomePage.innerHTML = homePage;

  viewHomePage.querySelector('#buttonNavStart').addEventListener('click', () => {
    onNavigate('/home');
  });
  viewHomePage.querySelector('#buttonNavProfile').addEventListener('click', () => {
    onNavigate('/profile');
  });

  viewHomePage.querySelector('#singOutBttn').addEventListener('click', () => {
    signOff()
      .then(() => onNavigate('/'))
      .catch((error) => {
        console.log('No pudo cerrar sesión', error);
      });
  });
  return viewHomePage;
};
