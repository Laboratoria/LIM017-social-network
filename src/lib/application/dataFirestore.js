import {
  app,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from './init.js'; // agregado

export const db = getFirestore(app); // agregado

export const postCollection = async (postDescription) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      text: postDescription,
      author: '',
      like: [],
      date: serverTimestamp(),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ');
  }
};
export const getPost = () => getDocs(collection(db, 'posts'));
