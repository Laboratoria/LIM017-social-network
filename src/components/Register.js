/* eslint-disable no-console */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { registerWithEmail, signInWithGoogle } from '../lib/application/authFirebase.js';

export const Register = () => {
  const registerPage = ` 
  <section class ='homeDiv'>
    <h1>CUY VIAJERO</h1>
    <img class='img-responsive' src='img/cuyLog.png'>
    <p class=text-Register>Registro</p>
    <label for='nameUser'>Nombre de usuario
    <input type='text' id='inputName' placeholder ='Nombre de usuario' name ='nameUser'>
    </label>
    <label for='nameEmail'>Email
    <input type='text' id='inputCorreo' placeholder ='Ingresar correo' name ='nameEmail'>
    </label>
    <label for='namePassword'>Contraseña
    <input type= 'password' id='inputPassword' placeholder ='Ingresar contraseña' name ='namePassword'> 
    </label>
    
    </section>
  `;

  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = registerPage;
  const buttonRegisterUser = document.createElement('button');
  const buttonBackHome = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  buttonRegisterUser.id = 'buttonUserRegister';
  buttonRegisterUser.className = 'buttonHome';
  homeDiv.className = 'conatainerHome';
  buttonRegisterUser.textContent = 'Crear usuario';
  buttonGoogle.id = 'buttonGoogle';

  buttonBackHome.id = 'buttonBackHome';
  buttonBackHome.className = 'buttonHome';
  buttonBackHome.textContent = '';
  buttonGoogle.textContent = 'Ingresar con Google 🇬';

 /*  const message = document.createElement('div'); */ // nuevo
 /*  message.innerHTML = 'Correo inválido'; */ // nuevo

 buttonBackHome.addEventListener('click', () => onNavigate('/'));

  /* HomeDiv.appendChild(message); */ // nuevo
  homeDiv.appendChild(buttonRegisterUser);
  homeDiv.appendChild(buttonGoogle);
  homeDiv.appendChild(buttonBackHome);
  

  buttonRegisterUser.addEventListener('click', () => {
    const passawordValue = document.getElementById('inputPassword').value;
    console.log(passawordValue);
    const correoValue = document.getElementById('inputCorreo').value;
    console.log(correoValue);
    registerWithEmail(correoValue, passawordValue);
  });

  buttonGoogle.addEventListener('click', () => {
    signInWithGoogle();
  });

  return homeDiv;

// eslint-disable-next-line eol-last
};
