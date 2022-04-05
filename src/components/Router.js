/* eslint-disable import/no-cycle */
import { LandingView } from './LandingPage.js';
import { SignUp } from './Register.js';
import { Login } from './Login.js';
import { ResetPassword } from './ForgotPassword.js';
import { MainLogin } from './MainLogin.js';

const routes = {
  '/': LandingView,
  '/Register': SignUp,
  '/Login': Login,
  '/ForgotPasword': ResetPassword,
  '/MainLogin': MainLogin,

};

export { routes };
