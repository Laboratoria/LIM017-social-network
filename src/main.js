// Este es el punto de entrada de tu aplicacion

import { Home } from './components/Home.js';
import { Register } from './components/Register.js';

// Router
// const pageOne = document.getElementById('welcome');

export const routes = {
  '/': Home,
  '/register': Register,
};

console.log(routes);

const root = document.getElementById('root');
root.innerHTML = routes[window.location.pathname];

/* const root = document.getElementById('root'); */

/* export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = routes[pathname]();
}; */

/* const onNavigate = (pathname) => {
  window.location.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.innerHTML = routes[pathname]();
};
console.log(onNavigate); */

/* export const changeView = (route) => {
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
};  */

/* export function showHome() {
  root.classList.add('hidde');
  onNavigate('#/home');
} */
// mostrar el logIn cuando carga la pagina
