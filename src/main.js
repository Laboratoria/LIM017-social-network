// Este es el punto de entrada de tu aplicacion

import { Home } from './components/Home';
import { Register } from './components/Register.js';

// Router
const pageOne = document.getElementById('welcome');

export const routes = {
  '': Home,
  '/': Home,
  '/register': Register,
};

console.log(routes);

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  pageOne.innerHTML = routes[pathname]();
};
console.log(onNavigate);

export const changeView = (route) => {
  pageOne.innerHTML = '';
  switch (route) {
    case '':
      pageOne.innerHTML = routes['']();
      break;
    case '/':
      pageOne.innerHTML = routes['/register']();
      break;
    case '/register':
      pageOne.innerHTML = routes['/register']();
      break;
    case '/home':
      pageOne.innerHTML = routes['/home']();
      break;
    default:
      break;
  }
  // console.log(route)
};
