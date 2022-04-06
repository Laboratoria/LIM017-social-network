import { createElements } from '../util.js';

export const RegisterByEmail = () => {
  const [mainSignUpDiv, imgContainer, logo, mainImg, signUpH2] = createElements('div', 'div', 'img', 'img', 'h2');
  mainSignUpDiv.setAttribute('id', 'div-register-by-email');
  logo.src = 'imagenes/DuckyPets.png';
  mainImg.src = 'imagenes/married-couple-with-dog.jpg';
  signUpH2.setAttribute('class', 'h2-titles');
  signUpH2.textContent = 'Registrarse por correo';
  imgContainer.append(logo, mainImg);
  mainSignUpDiv.append(imgContainer, signUpH2);

  // Inputs email, password, confirmar password y boton submit.
  const [registerEmail, registerPassword, confirmPassword, submitBtn] = createElements('input', 'input', 'input', 'button');
  registerEmail.setAttribute('id', 'register-email');
  registerEmail.setAttribute('class', 'inputs-register');
  registerEmail.setAttribute('type', 'email');
  registerEmail.setAttribute('placeholder', 'Ingresa tu correo');

  registerPassword.setAttribute('id', 'register-password');
  registerPassword.setAttribute('class', 'inputs-register');
  registerPassword.setAttribute('type', 'password');
  registerPassword.setAttribute('placeholder', 'Ingresa tu contraseña');

  confirmPassword.setAttribute('id', 'confirm-password');
  confirmPassword.setAttribute('class', 'inputs-register');
  confirmPassword.setAttribute('type', 'password');
  confirmPassword.setAttribute('placeholder', 'Confirma tu contraseña');
  submitBtn.setAttribute.id = 'submit-btn';
  submitBtn.textContent = 'Registrarse';

  mainSignUpDiv.append(registerEmail, registerPassword, confirmPassword, submitBtn);

  // Registrarse con Google

  const gmailRegisterBtn = document.createElement('button');
  gmailRegisterBtn.id = 'gmail-register-btn';
  gmailRegisterBtn.class = 'gmail-button';
  gmailRegisterBtn.textContent = 'Registrarse con Google';

  // Ya tienes cuenta

  const [yesAccount, yesAccountLogin] = createElements('p', 'a');
  yesAccount.id = 'p-yesAccount';
  yesAccount.textContent = '¿Ya tienes cuenta?';
  yesAccountLogin.id = 'p-yes-account-login';
  yesAccountLogin.href = '/MainLogin';
  yesAccountLogin.textContent = '¡Ingresa!';
  mainSignUpDiv.append(yesAccount, yesAccountLogin);

  return mainSignUpDiv;
};
