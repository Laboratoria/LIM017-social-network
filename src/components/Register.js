/* eslint-disable no-console */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/application/controller.js';
import { registerWithEmail, signInWithGoogle } from '../lib/application/authFirebase.js';

export const Register = () => {
  const registerPage = ` 
  <section class='text-container'>
    <h1>CUY VIAJERO</h1>
    <img class='img-responsive' src='img/cuyLog.png'>
    <p class=text-Register>Registro</p>
    <label for='nameUser'>Nombre de usuario
    <input type='text' id='createName' placeholder ='Nombre de usuario' name ='nameUser'>
    </label>
    <div class='messageUserError'><p id='messageUserError'></p></div>
    <label for='inputEmail'>Email
    <input type='text' id='createEmail' placeholder ='Ingresar correo' name ='nameEmail'>
    </label>
    <label for='namePassword'>Contraseña
    <input type= 'password' id='createPassword' placeholder ='Ingresar contraseña' name ='namePassword'>
    <p id='messageEmail'></p>
    <p id='messagePassword'></p>
    </label>
    <button id='buttonUserRegister' class='buttonHome' > Crear Ususario
    <button id='buttonGoogle' >Ingresar con Google 🇬
    <button id='buttonBackHome' class='buttonHome' >
    </section>
  `;

  const viewRegiterPage = document.createElement('div');
  viewRegiterPage.innerHTML = registerPage;
  viewRegiterPage.className = 'viewContainer';

  viewRegiterPage.querySelector('#buttonUserRegister').addEventListener('click', (e) => {
    const emailValue = viewRegiterPage.querySelector('#createEmail');
    console.log(emailValue);
    const passwordValue = viewRegiterPage.querySelector('#createPassword');
    console.log(passwordValue);
    const messageEmail = viewRegiterPage.querySelector('#messageEmail');
    const messagePassword = viewRegiterPage.querySelector('#messagePassword');
    // eslint-disable-next-line no-constant-condition
    if (emailValue.value === '') {
      messageEmail.innerHTML = 'campo email vacio';
    } if (passwordValue.value === '') {
      messagePassword.innerHTML = 'campo Password vacio vacio';
    }
    e.preventDefault();
    registerWithEmail(emailValue.value, passwordValue.value)
    .then(() => {
      onNavigate('/login');
    }).catch((error) => console.log(error));

  });
  viewRegiterPage.querySelector('#buttonGoogle').addEventListener('click', () => {
    signInWithGoogle();
  });
  viewRegiterPage.querySelector('#buttonBackHome').addEventListener('click', () => onNavigate('/'));

  return viewRegiterPage;

// eslint-disable-next-line eol-last
};