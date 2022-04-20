/* eslint-disable no-console */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { registerWithEmail } from '../lib/application/authFirebase.js';

export const Register = () => {
  const registerPage = ` 
  <section class ='homeDiv'>
    <h1>Cuy viajero</h1>
    <img class='imgLogo' src='img/cuy.png'>
    <p>Inicia sesión</p>
    <input type='text' id='inputName' placeholder ='Nombre de usuario'>
    <input type='text' id='inputCorreo' placeholder ='Ingresar correo'>
    <input type= 'password' id='inputPassword' placeholder ='Ingresar contraseña'> 
    </section>
  `;

  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = registerPage;
  const buttonRegisterUser = document.createElement('button');
  const buttonBackHome = document.createElement('button');

  buttonRegisterUser.id = 'buttonUserRegister';
  buttonRegisterUser.className = 'buttonHome';
  buttonRegisterUser.textContent = 'Crear usuario';

  buttonBackHome.id = 'buttonBackHome';
  buttonBackHome.className = 'buttonHome';
  buttonBackHome.textContent = 'Regresar a home';

 /*  const message = document.createElement('div'); */ // nuevo
 /*  message.innerHTML = 'Correo inválido'; */ // nuevo

 buttonBackHome.addEventListener('click', () => onNavigate('/'));

  /* HomeDiv.appendChild(message); */ // nuevo
  homeDiv.appendChild(buttonRegisterUser);
  homeDiv.appendChild(buttonBackHome);

  buttonRegisterUser.addEventListener('click', () => {
    const passawordValue = document.getElementById('inputPassword').value;
    console.log(passawordValue);
    const correoValue = document.getElementById('inputCorreo').value;
    console.log(correoValue);
    registerWithEmail(correoValue, passawordValue);
  });

 return homeDiv;

// eslint-disable-next-line eol-last
};
