// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../lib/application/controller.js';

export const Profile = () => {
  const profilePage = `
      <h1>Vista de profile</h1>`;

  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = profilePage;
  return homeDiv;
};
