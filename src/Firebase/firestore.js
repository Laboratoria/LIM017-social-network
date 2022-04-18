import {
  /* doc, getDoc, */
  getFirestore, collection, addDoc /* , getDocs */,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

import { app } from './init.js';

// init services
export const firestore = getFirestore(app); // esto es db

// usuarios
// usuario nombre correo foto

export const storeUsers = (user, email, name, picture) => {
  addDoc(collection(firestore, 'users'), {
    user,
    email,
    name,
    picture,
  }).then((test) => {
    console.log(`usuario creado. id : ${test.id}`);
  });
};

export const store = (data, collectionName) => {
  addDoc(collection(firestore, collectionName), data).then((test) => {
    console.log(`registro creado. id : ${test.id}`);
  });
};
