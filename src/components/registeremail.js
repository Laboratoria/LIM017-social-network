export const RegisterByEmail = () => {
  const bienvenidaDiv = document.createElement('div');
  bienvenidaDiv.setAttribute('id', 'div-Register-By-Email');
  const titleRegisterByEmail = document.createElement('h2');
  titleRegisterByEmail.setAttribute('class', 'h2-titles');
  titleRegisterByEmail.textContent = 'Registrarse por correo';

  // Crear cuenta con correo
  const registerEmail = document.createElement('input');
  registerEmail.setAttribute('id', 'registerEmail');
  registerEmail.setAttribute('class', 'inputs-register');
  registerEmail.setAttribute('type', 'email');
  registerEmail.setAttribute('placeholder', 'Ingresa tu correo');
  bienvenidaDiv.appendChild(titleRegisterByEmail, registerEmail);

  // ingresar Contraseña
  const registerPassword = document.createElement('input');
  registerPassword.setAttribute('id', 'registerPassword');
  registerPassword.setAttribute('class', 'inputs-register');
  registerPassword.setAttribute('type', 'password');
  registerPassword.setAttribute('placeholder', 'Ingresa tu contraseña');
  bienvenidaDiv.appendChild(registerPassword);

  // confirmar contraseña
  const registerPasswordConfirm = document.createElement('input');
  registerPasswordConfirm.setAttribute('id', 'registerPasswordConfirm');
  registerPasswordConfirm.setAttribute('class', 'inputs-register');
  registerPasswordConfirm.setAttribute('type', 'password');
  registerPasswordConfirm.setAttribute('placeholder', 'Confirma tu contraseña');
  bienvenidaDiv.appendChild(registerPasswordConfirm);

  // boton de registro - submit
  const registerByEmailBtn = document.createElement('button');
  registerByEmailBtn.setAttribute('id', 'registerByEmailBtn');
  registerByEmailBtn.textContent = 'Registrarse';
  bienvenidaDiv.appendChild(registerByEmailBtn);

  // Registrarse con Google

  const registrarseGmailBtn = document.createElement('button');
  registrarseGmailBtn.setAttribute('id', 'registrarseGmailBtn');
  registrarseGmailBtn.setAttribute('class', 'button-gmail');
  registrarseGmailBtn.textContent = 'Registrarse con Google';

  // Ya tienes cuenta

  const yesAccount = document.createElement('p');
  yesAccount.id = 'p-yesAccount';
  yesAccount.textContent = '¿Ya tienes cuenta?';
  const yesAccountLogin = document.createElement('p');
  yesAccountLogin.id = 'p-yesAccount-Login';
  yesAccountLogin.textContent = '¡Ingresa!';
  bienvenidaDiv.appendChild(yesAccount, yesAccountLogin);

  return bienvenidaDiv;
};
