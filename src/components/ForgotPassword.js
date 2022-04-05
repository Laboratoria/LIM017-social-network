import { createElements } from '../util.js';

export const ResetPassword = () => {
  const [forgotDiv, titleForgot, textTitleForgot, inputForgotPassword, buttonForgotPassword] = createElements('div', 'h2', 'h4', 'input', 'button');
  titleForgot.textContent = '¿Olvidaste tu contraseña?';
  textTitleForgot.textContent = 'Recupera tu contraseña con tu correo electrónico';
  inputForgotPassword.placeholder = 'correo electrónico';
  buttonForgotPassword.textContent = 'Recuperar contraseña';

  forgotDiv.append(titleForgot, textTitleForgot, inputForgotPassword, buttonForgotPassword);
  return forgotDiv;
};
