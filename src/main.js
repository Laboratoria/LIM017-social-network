/* eslint-disable import/no-cycle */
import { routes } from './components/Router.js';
import { CreateAccount } from './Firebase/controller/auth.js';

const rootDiv = document.getElementById('root');

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

// Evento de registrar al usuario
/*  submitBtn.addEventListener('click', () => {
  const password = document.getElementById('register-password').value;
  const email = document.getElementById('register-email').value;
  CreateAccount(email, password);
});
 */
