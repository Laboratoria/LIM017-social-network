import { createElements } from '../util.js';

export const ResetPassword = () => {
  const [forgotDiv, imgPets, titleForgot, textTitleForgot, inputForgotPassword, buttonForgotPassword] = createElements('div', 'img', 'h2', 'h4', 'input', 'button');
  forgotDiv.id = 'div-forgot-password';
  imgPets.src = 'imagenes/instantanea-blue.png';
  imgPets.setAttribute('id', 'img-instantanea-password');

  titleForgot.textContent = '¿Olvidaste tu contraseña?';
  titleForgot.id = 'title-forgot-h2';
  titleForgot.className = 'text-start-h2';
  textTitleForgot.textContent = 'Recupera tu contraseña con tu correo electrónico';
  textTitleForgot.id = 'text-forgot-h4';
  textTitleForgot.className = 'text-start-h2';

  inputForgotPassword.placeholder = 'correo electrónico';
  inputForgotPassword.id = 'input-forgot-password';
  inputForgotPassword.className = 'button-mail';

  buttonForgotPassword.textContent = 'Recuperar contraseña';
  buttonForgotPassword.id = 'button-forgot-password';
  buttonForgotPassword.className = 'button-go-landing';

  forgotDiv.append(imgPets, titleForgot, textTitleForgot);
  forgotDiv.append(inputForgotPassword, buttonForgotPassword);
  return forgotDiv;
};
