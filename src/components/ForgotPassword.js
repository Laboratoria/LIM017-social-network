export const ForgotPassword = () => {
  const forgotDiv = document.createElement('div');
  forgotDiv.setAttribute('id', 'div-forgot');
  const titleForgot = document.createElement('h2');
  titleForgot.setAttribute('class', 'h2-titles');
  titleForgot.textContent = '¿Olvidaste tu contraseña?';
  const textTitleForgot = document.createElement('h3');
  textTitleForgot.textContent = 'Recupera tu contraseña con tu correo electrónico';
  const inputForgotPassword = document.createElement('input');
  inputForgotPassword.id = 'input-password';
  inputForgotPassword.class = 'inputs-password';
  inputForgotPassword.placeholder = 'correo electrónico';
  const buttonForgotPassword = document.createElement('button');
  buttonForgotPassword.id = 'button-password';
  buttonForgotPassword.textContent = 'Recuperar contraseña';

  forgotDiv.append(titleForgot, textTitleForgot, inputForgotPassword, buttonForgotPassword);
  return forgotDiv;
};
