// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../lib/application/controller.js';

export const Home = () => {
  const homePage = `
      <h1>Este es el Home</h1>`;
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = homePage;
  return homeDiv;
};
