/* eslint-disable import/no-cycle */
import { LandingView } from './LandingPage.js';
import { SignUp } from './Register.js';
import { Login } from './Login.js';
import { ResetPassword } from './ForgotPassword.js';
import { MainLogin } from './MainLogin.js';
import { RegisterByEmail } from './RegisterEmail.js';

const routes = {
  '/': LandingView,
  '/Register': SignUp,
  '/Login': Login,
  '/ForgotPasword': ResetPassword,
  '/MainLogin': MainLogin,
  '/RegisterEmail': RegisterByEmail,

};

export { routes };
