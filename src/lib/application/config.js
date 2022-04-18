/* eslint-disable import/no-unresolved */
/* eslint-disable key-spacing */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
/*   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAAgdqL3NTZPK-zbpet7JJL095vRqUr-_Q',
  authDomain: 'cuy-viajero.firebaseapp.com',
  projectId: 'cuy-viajero',
  storageBucket: 'cuy-viajero.appspot.com',
  messagingSenderId: '71395262870',
  appId: '1:71395262870:web:a43b4cbb1edc66c18a1db7',
  measurementId: 'G-ZMBXKPDZ6K',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
