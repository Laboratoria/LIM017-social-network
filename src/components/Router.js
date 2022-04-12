/* eslint-disable import/no-cycle */
import { LandingView } from './LandingPage.js';
import { SignUp } from './Register.js';
import { Login } from './Login.js';
import { ResetPassword } from './ForgotPassword.js';
import { CreateAccount } from '../Firebase/auth.js';

const routes = {
  '/': LandingView,
  '/Register': SignUp,
  '/Login': Login,
  '/ForgotPasword': ResetPassword,
};

export { routes };

// Evento de registrar al usuario
/*   submitBtn.addEventListener('click', () => {
  const password = document.getElementById('register-password').value;
  const email = document.getElementById('register-email').value;
  CreateAccount(email, password);
}); */
