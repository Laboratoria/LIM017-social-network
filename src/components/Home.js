import { onNavigate } from '../main.js';

export const Home = () => {
  const pruebaHome = `
      <h1>Este es el Home</h1>`;
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = pruebaHome;
  return homeDiv;
};