/* eslint-disable import/named */
// eslint-disable-next-line import/no-cycle
import { routes } from './lib/application/controller.js';

const rootDiv = document.getElementById('root');

const component = routes[window.location.pathname];
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(component());
