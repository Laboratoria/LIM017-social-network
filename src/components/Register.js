/* eslint-disable no-console */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/application/controller.js';
import { registerWithEmail, signInWithGoogle } from '../lib/application/authFirebase.js';

export const Register = () => {
  const registerPage = ` 
  <section>
    <h1>CUY VIAJERO</h1>
    <img class='img-responsive' src='img/cuyLog.png'>
    <p class=text-Register>Registro</p>
    <label for='nameUser'>Nombre de usuario
    <input type='text' id='inputName' placeholder ='Nombre de usuario' name ='nameUser'>
    </label>
    <div class='messageUserError'><p id='messageUserError'></p></div>
    <label for='inputEmail'>Email
    <input type='text' id='inputEmail' placeholder ='Ingresar correo' name ='nameEmail'>
    </label>
    <label for='namePassword'>Contraseña
    <input type= 'password' id='inputPassword' placeholder ='Ingresar contraseña' name ='namePassword'>
    <p id='mesagge'>
    </label>
    <button id='buttonUserRegister' class='buttonHome' > Crear Ususario
    <button id='buttonGoogle' >Ingresar con Google 🇬
    <button id='buttonBackHome' class='buttonHome' >
    </section>
  `;

  const viewRegiterPage = document.createElement('div');
  viewRegiterPage.innerHTML = registerPage;
  viewRegiterPage.className = 'viewContainer';

  viewRegiterPage.querySelector('#buttonUserRegister').addEventListener('click', () => {
    const emailValue = viewRegiterPage.querySelector('#inputEmail').value;
    console.log(emailValue);
    const passawordValue = viewRegiterPage.querySelector('#inputPassword').value;

    console.log(passawordValue);
    registerWithEmail(emailValue, passawordValue);
    onNavigate('/login');
  });

  viewRegiterPage.querySelector('#buttonGoogle').addEventListener('click', () => {
    signInWithGoogle();
  });
  viewRegiterPage.querySelector('#buttonBackHome').addEventListener('click', () => onNavigate('/'));

  return viewRegiterPage;

// eslint-disable-next-line eol-last
};