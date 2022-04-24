/* eslint-disable import/no-cycle */

import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { Welcome } from './components/Welcome.js';
import { Publications } from './components/Publications.js';
import { Profile } from './components/Profile.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': Welcome,
  '/register': Register,
  '/login': Login,
  '/publications': Publications,
  '/profile': Profile,
  '/Home': Home,
};
/* const component = routes[window.location.pathname];
rootDiv.appenChild(component()); */
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
