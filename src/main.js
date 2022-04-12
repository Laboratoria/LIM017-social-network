// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';
 const imprimir = document.getElementById("root");
 imprimir.innerHTML= `<h1> aca se refleja lo que hagamos</h1>`
myFunction();
 */

import { Home } from "./components/Home.js"; 
import { Register } from "./components/Register.js"; 
import { Login } from "./components/Login.js"; 

const rootDiv = document.getElementById("root");
const routes = {
  "/" : Home,
  "/register": Register,
  "/login": Login,
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
  rootDiv.appendChild(component());
};
 /*  while (rootDiv.firstChild) { */
  /*   rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname] *());
}; */

rootDiv.appendChild(component());




