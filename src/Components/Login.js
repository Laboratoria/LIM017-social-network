import { onNavigate } from '../main.js';

export const Login= () =>{
  let WelcomeDiv= document.createElement("div");
  WelcomeDiv.textContent= "User1234";
  let buttonLogin= document.createElement("button");

  buttonLogin.textContent="Cerrar sesión";
  buttonLogin.addEventListener('click', () => onNavigate('/'));

  WelcomeDiv.appendChild(buttonLogin);

  return WelcomeDiv;
};
