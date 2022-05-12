/* eslint-disable no-shadow */
import {
  app,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  /* getCurrentUser, */
} from './init.js'; // agregado

export const db = getFirestore(app); // agregado

export const postCollection = async (postDescription) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      /* nameUser: getCurrentUser().displayName,
      id: getCurrentUser().uid,
      photo: getCurrentUser().photoURL, */
      text: postDescription,
      author: localStorage.getItem('userEmail'),
      like: [],
      date: new Date().toLocaleDateString('es'),

    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
export const getPost = () => getDocs(collection(db, 'posts'));

export const onGetPosts = (callback) => onSnapshot(query(collection(db, 'posts'), orderBy('date', 'desc')), callback);
