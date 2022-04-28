import {
  getAuth,
  addDoc,
  getFirestore,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
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
export const addPost = (post, title) => addDoc(collection(firestore, 'publicaciones'), { post, title });
export const onGetPostInRealTime = (callback) => onSnapshot(collection(firestore, 'publicaciones'), callback);
export const deletePost = (id) => deleteDoc(doc(firestore, 'publicaciones', id));
export const getPost = (id) => getDoc(doc(firestore, 'publicaciones', id));
export const getSinglePost = (id) => getDoc(doc(firestore, 'publicaciones', id));
export const updatePost = (id, newField) => updateDoc(doc(firestore, 'publicaciones', id), newField);
