import { singOut, getCurrentUser } from '../lib/firebaseUser.js';
// import {
//   savePost,
//   onGetPost,
//   deletePost,
//   getPostEdit,
//   updatePost,
//   arrayR,
//   arrayU,
// } from '../lib/postFirebase.js';
import { onNavigate } from '../main.js';
// import { showModal } from './modalDOM.js';

export const showHome = () => {
  document.querySelector('#btnLogOut').addEventListener('click', () => {
    singOut();
    onNavigate('/');
  });
  const nameLogIn = getCurrentUser().displayName;
  const uidLogIn = getCurrentUser().uid;
  console.log(uidLogIn);
  const nameHomeTagH3 = document.getElementById('nameHomeTagH3');
  const string2 = 'logueado ';
  nameHomeTagH3.innerHTML = string2 + nameLogIn;
};
