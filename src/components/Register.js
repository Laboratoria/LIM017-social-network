/* eslint-disable no-console */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/application/controller.js';
import {
 registerWithEmail, signInWithGoogle, sendEmailVerificationFirebase, modiedPerfil,
} from '../lib/application/authFirebase.js';

export const Register = () => {
  const registerPage = `
  <section class='text-container'>
    <h1>CUY VIAJERO</h1>
    <img class='img-responsive' src='img/cuyLog.png'>
    <p class=text-Register>Registro</p>
    <form>
    <label for='nameUser'>Nombre de usuario
    <input type='text' id='createName' placeholder ='Ingresar nombre de usuario' name ='nameUser'>
    </label>
    <label for='inputEmail'>Email
    <input type='text' id='createEmail' placeholder ='Ingresar correo' name ='nameEmail'>
    </label>
    <p id='messageEmail'></p>
    <label for='namePassword'>Contraseña
    <input type= 'password' id='createPassword' placeholder ='Ingresar contraseña' name ='namePassword'>
    </label>
    </form>
    <p id='messagePassword'></p>
    <p id='messageVerificado'></p>
    <button id='buttonUserRegister' class='buttonHome'> Crear Ususario
    <button id='buttonGoogle' >Ingresar con Google 🇬
    <button id='buttonBackHome' class='buttonHome' >
    </section>
  `;

  const viewRegiterPage = document.createElement('div');
  viewRegiterPage.innerHTML = registerPage;
  viewRegiterPage.className = 'viewContainer';

  viewRegiterPage.querySelector('#buttonUserRegister').addEventListener('click', (e) => {
    e.preventDefault();
    const nameValue = viewRegiterPage.querySelector('#createName');
    console.log(nameValue);
    const emailValue = viewRegiterPage.querySelector('#createEmail');
    console.log(emailValue);
    const passwordValue = viewRegiterPage.querySelector('#createPassword');
    console.log(passwordValue);
    const messageEmail = viewRegiterPage.querySelector('#messageEmail');
    const messagePassword = viewRegiterPage.querySelector('#messagePassword');
    const messageVerificado = viewRegiterPage.querySelector('#messageVerificado');
    // eslint-disable-next-line no-constant-condition

    registerWithEmail(emailValue.value, passwordValue.value)
    // eslint-disable-next-line consistent-return
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .then((user) => {
      console.log({ user });
        messageVerificado.innerHTML = 'Usuario creado correctamente';
        console.log(user);
        modiedPerfil(nameValue.value);
        sendEmailVerificationFirebase();
        setTimeout(() => {
          onNavigate('/login');
        }, 5000);
    }).catch((error) => {
      console.log(error);
      console.log(error.message);
    switch (error.message) {
      case 'Firebase: Error (auth/missing-email).': messageEmail.innerHTML = 'El correo es obligatorio'; break;
      case 'Firebase: Error (auth/invalid-email).': messageEmail.innerHTML = 'Digite un correo válido'; break;
      case 'Firebase: Error (auth/email-already-in-use).': messageEmail.innerHTML = 'Este correo ya esta registrado, intente de nuevo.'; break;
      case 'Firebase: Error (auth/internal-error).': messagePassword.innerHTML = 'La contraseña es obligatoria'; break;
      default: return error.message;
    }
    return error.message;
  });
});
  viewRegiterPage.querySelector('#buttonGoogle').addEventListener('click', () => {
    signInWithGoogle()
    .then(() => { onNavigate('/home'); });

  });
  viewRegiterPage.querySelector('#buttonBackHome').addEventListener('click', () => onNavigate('/'));

  return viewRegiterPage;

// eslint-disable-next-line eol-last
};