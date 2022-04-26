import {
  /* doc, getDoc, */
  getFirestore, collection, addDoc, // getDocs,
} from './Firebase-util.js';

import { app } from './init.js';

// init services
export const firestore = getFirestore(app); // esto es db

// usuarios
// usuario nombre correo foto

export const storeUsers = (email) => {
  addDoc(collection(firestore, 'users'), {
    email,
  }).then((test) => {
    // console.log(`usuario creado. id : ${test.id}`);
  });
};

export const store = (data, collectionName) => {
  addDoc(collection(firestore, collectionName), data).then((test) => {
    console.log(`registro creado. id : ${test.id}`);
  });
};

// export const getPost = (uid) => {
//   const postUser = collection(firestore, 'publicaciones');
//   const q = query(postUser, where('uid', '==', uid));
//   return getDocs(q);
// };

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
