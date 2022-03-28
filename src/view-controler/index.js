import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  switch (route) {
    case '#/': { return container.appendChild(components.home()); }
    case '#/login': { return container.appendChild(components.login()); }

    default:
      break;
  }
  console.log(route);
};

export { changeView };
