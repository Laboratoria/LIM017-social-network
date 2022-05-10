/* eslint-disable no-shadow */
import {
  app,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  // doc,
} from './init.js'; // agregado

export const db = getFirestore(app); // agregado

export const postCollection = async (postDescription) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      text: postDescription,
      author: localStorage.getItem('userEmail'),
      like: [],
      date: new Date().toLocaleDateString('es'),

    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ');
  }
};
export const getPost = () => getDocs(collection(db, 'posts'));

// export const onGetPosts = () => console.log('onGetPosts'); //Cuando se traigan nuevos posts

/* export const onGetPosts = onSnapshot(doc(db, 'posts'), (doc) => {
  console.log('Data actual: ', doc.data());
}); */
export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);
