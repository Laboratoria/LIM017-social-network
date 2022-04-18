/* eslint-disable import/no-cycle */
import { createElements } from '../util.js';
import { onNavigate } from '../main.js';

export const ResetPassword = () => {
  const [
    forgotDiv,
    logo,
    imgPets,
    titleForgot,
    textTitleForgot,
    inputForgotPassword,
    buttonForgotPassword,
  ] = createElements('div', 'img', 'img', 'h2', 'h4', 'input', 'button');
  forgotDiv.id = 'div-forgot-password';

  // Boton de regresar a la bienvenida
  const goLandingButton = document.createElement('button');
  goLandingButton.id = 'go-landing-button';
  goLandingButton.className = 'back-button';
  // goLandingButton.src = 'imagenes/flecha-izquierda.png';
  // goLandingButton.textContent = 'home';

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  forgotDiv.appendChild(goLandingButton);

  logo.src = 'imagenes/DuckyPets-con-transparencia-achicado.png';
  logo.id = 'forgot-logo';
  imgPets.src = 'imagenes/instantanea-celeste-transparencia.png';
  imgPets.id = 'img-instantanea-password';

  titleForgot.textContent = '¿Olvidaste tu contraseña?';
  titleForgot.id = 'title-forgot-h2';
  titleForgot.className = 'text-start-h2';
  textTitleForgot.textContent = 'Recupera tu contraseña con tu correo electrónico';
  textTitleForgot.id = 'text-forgot-h4';
  textTitleForgot.className = 'text-start-h2';

  const [inputContainer] = createElements('div');

  inputForgotPassword.placeholder = '  Correo electrónico';
  inputForgotPassword.id = 'input-forgot-password';
  inputForgotPassword.className = 'button-mail';

  buttonForgotPassword.textContent = 'Recuperar contraseña';
  buttonForgotPassword.id = 'button-forgot-password';
  buttonForgotPassword.className = 'button-go-landing';

  forgotDiv.append(titleForgot, textTitleForgot);
  inputContainer.append(inputForgotPassword, buttonForgotPassword);
  inputContainer.id = 'input-container';
  forgotDiv.append(inputContainer);
  return forgotDiv;
};
