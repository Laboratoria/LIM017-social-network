/* eslint-disable import/no-cycle */
import { bienvenida } from './components/bienvenida.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
import { MainLogin } from './components/main-login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': bienvenida,
  '/register': register,
  '/login': login,
  '/main-login': MainLogin,
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
