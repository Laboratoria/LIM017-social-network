import { createElements } from '../util.js';
import { store } from '../Firebase/firestore.js';

export const Feed = () => {
  console.log('kawai es un payaso');
  store({ email: 'kawai@google.com' }, 'users');

  const [feedDiv] = createElements('div');
  return feedDiv;
};
