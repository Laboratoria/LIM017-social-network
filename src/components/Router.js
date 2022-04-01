/* eslint-disable import/no-cycle */
import { LandingView } from './LandingPage.js';
import { SignUp } from './Register.js';
import { Login } from './Login.js';
import { ForgotPassword } from './ForgotPassword.js';
import { MainLogin } from './MainLogin.js';

const routes = {
  '/': LandingView,
  '/Register': SignUp,
  '/Login': Login,
  '/ForgotPasword': ForgotPassword,
  '/MainLogin': MainLogin,

};

export { routes };
