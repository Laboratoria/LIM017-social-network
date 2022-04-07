import { onNavigate } from '../main.js';

export const Welcome = () => {

  /*let WelcomeDiv = document.createElement("div");
  let buttonRegister = document.createElement("button");
  let buttonLogin = document.createElement("button");
  buttonLogin.className = 'buttonLogin';

  buttonRegister.textContent ="Regístrate";
  buttonLogin.textContent ="Iniciar sesión";

  buttonRegister.addEventListener("click", () => onNavigate ('/register'))
  buttonLogin.addEventListener('click', () => onNavigate ('/login'));

  WelcomeDiv.appendChild(buttonRegister);
  WelcomeDiv.appendChild(buttonLogin);

  return WelcomeDiv;*/

  let WelcomeDiv = document.createElement("section");
  WelcomeDiv.innerHTML = `<section id="intro" class="intro">
  <main class="container">
  <img class="logotype" src="./img/LogoTellMe.svg">
  <div>
    <p id="welcomeApp" class="welcomeApp">¡Bienvenid@!</p>
    <button id="buttonLogin">Iniciar sesión</button>
  </div>
  </main>
  </section>`


  let buttonRegister = document.createElement("button");
  let buttonLogin = document.createElement("button");
  buttonRegister.textContent ="Regístrate";
  buttonRegister.addEventListener("click", () => onNavigate ('/register'));

  /*buttonLogin.setAttribute("id","buttonLogin");*/
  /*buttonLogin.textContent ="Iniciar sesión";*/
  buttonLogin.addEventListener('click', () => onNavigate ('/login'));

  buttonRegister.classList.add("buttonRegister");

  WelcomeDiv.appendChild(buttonRegister);
  /*WelcomeDiv.appendChild(buttonLogin);*/
  WelcomeDiv.classList.add("WelcomeDiv");
  WelcomeDiv.querySelector("#buttonLogin").addEventListener('click', () => onNavigate ('/login'));

  return WelcomeDiv;
};
