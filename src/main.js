// Este es el punto de entrada de tu aplicacion

// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { LogIn } from './components/LogIn.js';
// Router
// const pageOne = document.getElementById('welcome');

export const routes = {
  '/': Home,
  '/register': Register,
  '/logIn': LogIn,
};

// console.log(routes);

const root = document.getElementById('root');
root.innerHTML = routes[window.location.pathname]();

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.innerHTML = routes[pathname]();
};
/* console.log(onNavigate); */

const registerPage = document.getElementById('createAccBtn');
registerPage.addEventListener('click', () => onNavigate('/register'));

const goToLogin = document.getElementById('goToLoginBtn');
goToLogin.addEventListener('click', () => onNavigate('/logIn'));

/* export const changeView = (route) => {
  root.innerHTML = '/';
  switch (route) {
    case '':
      root.innerHTML = routes['/']();
      break;
    case '/':
      root.innerHTML = routes['/register']();
      break;
    default:
      break;
  }
  // console.log(route)
}; */

/* export function showHome() {
  root.classList.add('hidde');
  onNavigate('#/home');
} */
// mostrar el logIn cuando carga la pagina
