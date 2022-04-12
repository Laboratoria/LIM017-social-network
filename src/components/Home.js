/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* export const homeView = () => {
    // aqui tu codigo
    // eslint-disable-next-line no-console
    console.log('Hola mundo!');
  }; */

// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement("div");
  const buttonRegister = document.createElement("button");
  const buttonLogin = document.createElement("button");


  buttonRegister.textContent = "Registrate";
  buttonLogin.textContent = "Inicia sesiòn";

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));


  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
