import {
  app,
  getFirestore,
  collection,
  addDoc,
} from './init.js'; // agregado

export const db = getFirestore(app); // agregado

export const postCollection = async () => {
  
  try {
    const docRef = await addDoc(collection(db, 'postColection'), {
      first: 'Ana',
      last: 'Lovelace',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
