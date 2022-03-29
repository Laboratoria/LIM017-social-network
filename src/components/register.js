import { onNavigate } from '../main.js';

export const register = () => {
  const bienvenidaDiv = document.createElement('div');
  bienvenidaDiv.textContent = 'Bienvenida al registro';
  const buttonBienvenida = document.createElement('button');

  buttonBienvenida.textContent = 'Regresar a la bienvenida';

  buttonBienvenida.addEventListener('click', () => onNavigate('/'));

  bienvenidaDiv.appendChild(buttonBienvenida);

  return bienvenidaDiv;
};
