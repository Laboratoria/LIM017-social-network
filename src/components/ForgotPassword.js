export const ForgotPassword = () => {
  const forgotDiv = document.createElement('div');
  const titleForgot = document.createElement('h2');
  titleForgot.textContent = '¿Olvidaste tu contraseña?';
  const textTitleForgot = document.createElement('h4');
  textTitleForgot.textContent = 'Recupera tu contraseña con tu correo electrónico';
  const inputForgotPassword = document.createElement('input');
  inputForgotPassword.placeholder = 'correo electrónico';
  const buttonForgotPassword = document.createElement('button');
  buttonForgotPassword.textContent = 'Recuperar contraseña';

  forgotDiv.append(titleForgot, textTitleForgot, inputForgotPassword, buttonForgotPassword);
  return forgotDiv;
};
