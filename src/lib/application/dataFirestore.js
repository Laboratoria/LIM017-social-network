/* eslint-disable no-shadow */
import {
  initializeApp,
  /* getAuth, */
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy,
  getDoc,
} from './init.js'; // agregado
// eslint-disable-next-line import/no-cycle
import { auth } from './authFirebase.js';
import { firebaseConfig } from './config.js';

export const app = initializeApp(firebaseConfig);
/* export const getCurrentUser = () => getAuth().currentUser; */

export const db = getFirestore(app); // agregado

export const postCollection = async (postDescription) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      nameUser: auth.currentUser.displayName,
      id: auth.currentUser.uid,
      photo: auth.currentUser.photoURL,
      text: postDescription,
      author: localStorage.getItem('userEmail'),
      like: [],
      date: new Date().toLocaleDateString('es'),
      hora: new Date().toLocaleTimeString('es'),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ');
  }
};
/* export const getPost = () => getDocs(collection(db, 'posts')); */

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPostPublication = (id) => getDoc(doc(db, 'posts', id));

// export const onGetPosts = () => console.log('onGetPosts'); //Cuando se traigan nuevos posts

/* export const onGetPosts = onSnapshot(doc(db, 'posts'), (doc) => {
    console.log('Data actual: ', doc.data());
  }); */
export const onGetPosts = (callback) => onSnapshot(query(collection(db, 'posts'), orderBy('date', 'desc')), callback);

// const q = query(citiesRef, orderBy("name"), limit(3));
