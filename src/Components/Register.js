import { onNavigate } from '../main.js';

export const Register= () =>{
  let WelcomeDiv= document.createElement("div");
  WelcomeDiv.textContent= "Regístrate";
  let buttonWelcome= document.createElement("button");

  buttonWelcome.textContent= "Crear cuenta";
  buttonWelcome.addEventListener('click', () => onNavigate('/'));

  WelcomeDiv.appendChild(buttonWelcome);

  return WelcomeDiv;
};
