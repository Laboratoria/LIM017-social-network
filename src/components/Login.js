/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/application/controller.js';
import { signInWithGoogle } from '../lib/application/authFirebase.js';

export const Login = () => {
  const loginPage = `
  <section class='text-container'>

    <h1>CUY VIAJERO</h1>
    <img class='img-responsive' src='img/cuyLog.png'>
    <p class=text-Register>Login</p>
    <label for='nameEmail'>Email
    <input type='text' id='inputEmail' placeholder ='Ingresar correo' name ='nameEmail'>
    </label>
    <label for='namePassword'>Contraseña
    <input type= 'password' id='inputPassword' placeholder ='Ingresar contraseña' name ='namePassword'>
    </label>
    <button id='GetInto'> Iniciar sesión
    <button id='buttonGoogle'> Ingresar con Google G
    <button id='buttonBackHome' class='buttonHome'
    </section>
  `;

  const viewLoginPage = document.createElement('div');
  viewLoginPage.innerHTML = loginPage;
  viewLoginPage.className = 'viewContainer';
  viewLoginPage.querySelector('#GetInto').addEventListener('click', () => {
    const emailValue = viewLoginPage.querySelector('#inputEmail').value;
    console.log(emailValue);
    const passwordValue = viewLoginPage.querySelector('#inputPassword').value;
    console.log(passwordValue);
  });
  viewLoginPage.querySelector('#buttonGoogle').addEventListener('click', () => {
    signInWithGoogle();
  });
  viewLoginPage.querySelector('#buttonBackHome').addEventListener('click', () => onNavigate('/'));
  return viewLoginPage;
};
