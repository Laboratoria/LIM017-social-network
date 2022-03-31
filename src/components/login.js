/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const login = () => {
  const bienvenidaDiv = document.createElement('div');
  /* bienvenidaDiv.textContent = 'Bienvenida al Login'; */
  const list = `
    <div class="img">
    <img src="imagenes/DuckyPets.png" alt="">
    </div>`;

  bienvenidaDiv.insertAdjacentHTML('beforeend', list);

  // Botones de acceso
  const textoLogin = document.createElement('h2');
  textoLogin.textContent = 'Iniciar Sesion';
  bienvenidaDiv.appendChild(textoLogin);

  const buttonGmailLogin = document.createElement('button');
  buttonGmailLogin.textContent = 'Iniciar Sesion con Gmail';
  buttonGmailLogin.setAttribute('id', 'btnGmailLogin');

  const buttonFacebookLogin = document.createElement('button');
  buttonFacebookLogin.textContent = 'Iniciar Sesion con Facebook';
  buttonFacebookLogin.setAttribute('id', 'btnFacebookLogin');

  const buttonEmailLogin = document.createElement('button');
  buttonEmailLogin.textContent = 'Iniciar Sesion con Email';
  buttonEmailLogin.setAttribute('id', 'btnEmailLogin');

  buttonEmailLogin.addEventListener('click', () => onNavigate('/MainLogin'));

  bienvenidaDiv.appendChild(buttonGmailLogin);
  bienvenidaDiv.appendChild(buttonFacebookLogin);
  bienvenidaDiv.appendChild(buttonEmailLogin);
  const forgotPassword = document.createElement('a');
  forgotPassword.textContent = '¿Olvidaste tu contraseña?';
  forgotPassword.href = '/ForgotPasword';
  bienvenidaDiv.appendChild(forgotPassword);

  // No tienes cuenta
  const noAccount = document.createElement('p');
  noAccount.textContent = '¿No tienes cuenta?';
  bienvenidaDiv.appendChild(noAccount);
  const noAccountRegister = document.createElement('a');
  noAccountRegister.textContent = 'Registrate';
  noAccountRegister.href = '/Register';
  noAccountRegister.setAttribute('id', 'btnRegistrarse');
  bienvenidaDiv.appendChild(noAccountRegister);

  // Boton de regresar a la bienvenida
  const buttonBienvenida = document.createElement('button');

  buttonBienvenida.textContent = 'Regresar al inicio';

  buttonBienvenida.addEventListener('click', () => onNavigate('/'));
  bienvenidaDiv.appendChild(buttonBienvenida);

  return bienvenidaDiv;
};
