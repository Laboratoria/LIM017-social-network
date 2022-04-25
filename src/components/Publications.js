// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../lib/application/controller.js';

export const Publications = () => {
  const publicationsPage = `
    <h1>Vista Publicaciones</h1>`;

  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = publicationsPage;
  return homeDiv;
};
