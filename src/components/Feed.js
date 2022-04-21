import { createElements } from '../util.js';
import { store } from '../Firebase/firestore.js';

export const Feed = () => {
  store({ email: 'ejemplo@google.com' }, 'users');

  const [feedDiv] = createElements('div');
  return feedDiv;
};
