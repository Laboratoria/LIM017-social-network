import
{ initializeApp }
  from './Firebase-util.js';

import { firebaseConfig } from './config.js';

export const app = initializeApp(firebaseConfig);
