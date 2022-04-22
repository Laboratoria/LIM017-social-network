/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBstHxLJef-9_JVEJsh4nXW78rm0kritF4',
  authDomain: 'be-fit-v01-social-network.firebaseapp.com',
  projectId: 'be-fit-v01-social-network',
  storageBucket: 'be-fit-v01-social-network.appspot.com',
  messagingSenderId: '545615078615',
  appId: '1:545615078615:web:e5df030944c6cad5e53c92',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
