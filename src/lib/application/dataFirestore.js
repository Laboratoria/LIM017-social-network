import {
  app,
  getFirestore,
  collection,
  addDoc,
} from './init.js'; // agregado

export const db = getFirestore(app); // agregado

export const postCollection = async (postDescription) => {
  // collection(db, 'post');
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      text: postDescription,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ');
  }
};
