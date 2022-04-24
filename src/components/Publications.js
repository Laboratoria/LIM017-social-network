import { onNavigate } from '../main.js';

export const Publications = () => {
  const prueba = `
    <h1>Vista Publicaciones</h1>`;

  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = prueba;
  return homeDiv;
};