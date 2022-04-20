/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Home = () => {
  const homePage = `
    <section class ='homeDiv'>
    <h1>Cuy viajero</h1>
    <img class='imgLogo' src='img/cuy.png'>
    <p>Inicia sesión</p>
    </section>
    `;
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = homePage;

  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.id = 'buttonRegister';
  buttonLogin.id = 'buttonLogin';
  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Usuario y contraseña';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);

  return homeDiv;
// eslint-disable-next-line eol-last
};
