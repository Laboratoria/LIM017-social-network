export const RegisterByEmail = () => {
  const bienvenidaDiv = document.createElement('div');
  bienvenidaDiv.textContent = 'Registrarse por correo';

  // Crear cuenta con correo
  const registerEmail = document.createElement('input');
  registerEmail.setAttribute('id', 'registerEmail');
  registerEmail.setAttribute('type', 'email');
  registerEmail.setAttribute('placeholder', 'Ingresa tu correo');
  bienvenidaDiv.appendChild(registerEmail);

  // ingresar Contraseña
  const registerPassword = document.createElement('input');
  registerPassword.setAttribute('id', 'registerPassword');
  registerPassword.setAttribute('type', 'password');
  registerPassword.setAttribute('placeholder', 'Ingresa tu contraseña');
  bienvenidaDiv.appendChild(registerPassword);

  // confirmar contraseña
  const registerPasswordConfirm = document.createElement('input');
  registerPasswordConfirm.setAttribute('id', 'registerPasswordConfirm');
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
  registrarseGmailBtn.textContent = 'Registrarse con Google';

  // Ya tienes cuenta

  const yesAccount = document.createElement('p');
  yesAccount.textContent = '¿Ya tienes cuenta?';
  const yesAccountLogin = document.createElement('p');
  yesAccountLogin.textContent = '¡Ingresa!';
  bienvenidaDiv.appendChild(yesAccount);
  bienvenidaDiv.appendChild(yesAccountLogin);

  return bienvenidaDiv;
};
