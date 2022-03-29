import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/': { return container.appendChild(components.home()); }
    case '#/login': { return container.appendChild(components.login()); }
    case '#/perfil': { return container.appendChild(components.perfil()); }
    default:
      break;
  }
  return route;
};

export { changeView };
