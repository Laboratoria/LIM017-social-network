import {
  getAuth,
  addDoc,
  getFirestore,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from './Firebase-util.js';

import { app } from './init.js';

// init services
const auth = getAuth(app);
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

export const addPost = (post, title) => addDoc(collection(firestore, 'Publicaciones'), { post, title });
export const onGetPostInRealTime = (callback) => onSnapshot(collection(firestore, 'Publicaciones'), callback);
export const deletePost = (id) => deleteDoc(doc(firestore, 'Publicaciones', id));
export const getPost = (id) => getDoc(doc(firestore, 'Publicaciones', id));
