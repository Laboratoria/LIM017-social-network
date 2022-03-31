/* eslint-disable import/no-cycle */
import { bienvenida } from './components/Bienvenida.js';
import { register } from './components/Register.js';
import { login } from './components/Login.js';
import { ForgotPassword } from './components/ForgotPassword.js';
import { MainLogin } from './components/MainLogin.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': bienvenida,
  '/Register': register,
  '/Login': login,
  '/ForgotPasword': ForgotPassword,
  '/MainLogin': MainLogin,

};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(component());
