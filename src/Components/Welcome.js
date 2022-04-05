import { onNavigate } from '../main.js';

export const Welcome = () => {
  let WelcomeDiv = document.createElement("div");
  let buttonRegister = document.createElement("button");
  let buttonLogin = document.createElement("button");

  buttonRegister.textContent ="Regístrate";
  buttonLogin.textContent ="Iniciar sesión";

  buttonRegister.addEventListener("click", () => onNavigate ('/register'))
  buttonLogin.addEventListener('click', () => onNavigate ('/login'));

  WelcomeDiv.appendChild(buttonRegister);
  WelcomeDiv.appendChild(buttonLogin);

  return WelcomeDiv;
};
