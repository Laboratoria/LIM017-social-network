/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const login = () => {
  const bienvenidaDiv = document.createElement('div');
  bienvenidaDiv.textContent = 'Bienvenida al Login';
  const buttonBienvenida = document.createElement('button');

  buttonBienvenida.textContent = 'Regresar a la bienvenida';

  buttonBienvenida.addEventListener('click', () => onNavigate('/'));
  bienvenidaDiv.appendChild(buttonBienvenida);

  return bienvenidaDiv;
};
