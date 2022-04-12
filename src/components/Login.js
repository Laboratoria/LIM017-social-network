/* eslint-disable import/newline-after-import */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
export const Login = () => {
  const HomeDiv = document.createElement("div");
  HomeDiv.textContent = "Bienvenido al Login";
  const buttonHome = document.createElement("button");

  buttonHome.textContent = "Regresar al Home";

  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};