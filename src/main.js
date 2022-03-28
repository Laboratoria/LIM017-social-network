import { changeView } from './view-controler/index.js'

const init = () => {
  window.addEventListener('hashchange', () => console.log(window.location.hash));
};

window.addEventListener('load', init);



// // Este es el punto de entrada de tu aplicacion
// //aqui van las funciones de firebase
// import { myFunction } from './lib/index.js';

// myFunction();
