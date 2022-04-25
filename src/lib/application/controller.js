/* eslint-disable import/no-cycle */
import { Home } from '../../components/Home.js';
import { Login } from '../../components/Login.js';
import { Profile } from '../../components/Profile.js';
import { Publications } from '../../components/Publications.js';
import { Register } from '../../components/Register.js';
import { Welcome } from '../../components/Welcome.js';

const rootDiv = document.getElementById('root');

export const routes = {
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
