/* eslint-disable import/no-unresolved */
import
{ initializeApp }
  from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';

import { firebaseConfig } from './config.js';

export const app = initializeApp(firebaseConfig);
