/* eslint-disable import/no-cycle */
import { bienvenida } from './Bienvenida.js';
import { register } from './Register.js';
import { login } from './Login.js';
import { ForgotPassword } from './ForgotPassword.js';
import { MainLogin } from './MainLogin.js';

const routes = {
  '/': bienvenida,
  '/Register': register,
  '/Login': login,
  '/ForgotPasword': ForgotPassword,
  '/MainLogin': MainLogin,

};

export { routes };
