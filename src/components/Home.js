// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../lib/application/controller.js';
// eslint-disable-next-line import/no-cycle
import { signOff } from '../lib/application/authFirebase.js';

export const Home = () => {
  const homePage = `
      <h1>Este es el Home</h1>
      <button id='singOutBttn'> Cerrar sesión`;
  const viewHomePage = document.createElement('div');
  viewHomePage.innerHTML = homePage;
  viewHomePage.querySelector('#singOutBttn').addEventListener('click', () => {
    signOff()
      .then(() => onNavigate('/'))
      .catch((error) => {
        console.log('No pudo cerrar sesión', error);
      });
  });
  return viewHomePage;
};
