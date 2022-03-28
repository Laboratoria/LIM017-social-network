// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initializedApp({
  apiKey: "AIzaSyC-FwgLzHN3VWOhYKjOglq4xMcgS0vtnM8",
  authDomain: "ducky-pets.firebaseapp.com",
  projectId: "ducky-pets",
  storageBucket: "ducky-pets.appspot.com",
  messagingSenderId: "92972237304",
  appId: "1:92972237304:web:fbf52033310463e361960d"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/// Aqui termina Firebase

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
