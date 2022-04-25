/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/application/controller.js';
import { signInWithGoogle } from '../lib/application/authFirebase.js';

export const Login = () => {
  const loginPage = `
  <section class ='homeDiv'>
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
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = loginPage;
  homeDiv.className = 'conatainerHome';

  homeDiv.querySelector('#GetInto').addEventListener('click', () => {
    const emailValue = homeDiv.querySelector('#inputEmail').value;
    console.log(emailValue);
    const passwordValue = homeDiv.querySelector('#inputPassword').value;
    console.log(passwordValue);
  });
  homeDiv.querySelector('#buttonGoogle').addEventListener('click', () => {
    signInWithGoogle();
  });
  homeDiv.querySelector('#buttonBackHome').addEventListener('click', () => onNavigate('/'));

  return homeDiv;
};
  /* homeDiv.querySelector('#Pruebatest').addEventListener('click', () => {
    console.log('La incredulidad');
  }); */

/* const loginDiv = document.createElement('div');
  loginDiv.textContent = 'Bienvenido al Login';
  const buttonHome = document.createElement('button');
  const inputName = document.createElement('input');
  const inputPassword = document.createElement('input');
  const titleRedSocial = document.createElement('h1');
  const image = document.createElement('img');
  const buttonGetInto = document.createElement('button');
 */
/*  inputName.id = 'inputName';
  titleRedSocial.className = 'titleRedSocial';
  inputName.placeholder = 'Nombre de usuario';
  inputPassword.placeholder = 'Ingrese contraseña';
  inputPassword.id = 'inputPassword';
  loginDiv.className = 'conatainerHome';
  buttonHome.className = 'buttonHome';
  image.className = 'img-responsive';
  image.src = 'img/cuyLog.png';
  titleRedSocial.innerText = 'CUY VIAJERO';
  buttonHome.textContent = 'Regresar al home';
  buttonGetInto.id = 'GetInto';
  buttonGetInto.textContent = 'Iniciar sesión'; */
/*
  loginDiv.appendChild(titleRedSocial);
  loginDiv.appendChild(image);
  loginDiv.appendChild(inputName);
  loginDiv.appendChild(inputPassword);
  loginDiv.appendChild(buttonGetInto);
  loginDiv.appendChild(buttonHome); */

/*  buttonHome.addEventListener('click', () => onNavigate('/')); */

// eslint-disable-next-line padded-blocks
/* return loginDiv; */
