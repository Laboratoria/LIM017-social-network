/* eslint-disable no-unused-vars */
import { createElements } from '../util.js';
import { store, onGetPostInRealTime } from '../Firebase/firestore.js';

export const Feed = () => {
  const userId = sessionStorage.getItem('uid');

  const feedWrapper = document.createElement('div');
  const templateFeed = `
  <section id="feed" class= "contenedor-section">

  <img id="feed-logo" class="logo" src="imagenes/logo.png">

  <div id="createNewPost">
    <p> Hola ${sessionStorage.getItem('username')}</p>
    <button id="btnNewPost" class="btn-new"> Crear Nueva Publicación </button>
  </div>

  <form id = "formNewPost" class = "hide">
    <input type = "text" id ="newPostTitle" class = "newPostTitle" placeholder = "coloca el título de tu publicación" value= "">

    <input type = "text" id ="newPostBody" class="newPostBody" placeholder = "Escribe tu publicacion" value="">

    <button type = "submit" id = "publishBtn" value="Publish"> Publicar </button>
  </form>
  
  <div id='feedPost1'></div>

  `;

  feedWrapper.innerHTML += templateFeed;

  const postNew = feedWrapper.querySelector('.btn-new');

  const formNewPost = feedWrapper.querySelector('#formNewPost');
  postNew.addEventListener('click', () => {
    formNewPost.classList.remove('hide');
  });

  const newPostTitle = feedWrapper.querySelector('#newPostTitle');
  const newPostBody = feedWrapper.querySelector('#newPostBody');

  // event to submit new post
  formNewPost.addEventListener('submit', (e) => {
    e.preventDefault();
    store({ title: newPostTitle.value, body: newPostBody.value, userId }, 'publicaciones');
    formNewPost.classList.add('hide');
  });

  // Funcion para traer posts al feed
  const templateFeedPost = (title, body) => `
 <section id='postContainer' class= "postContainer">
    <div id='userInfoDiv'></div>
    <p id='user-name'></p>
    <div id='postTitle'>${title}</div>
    <div id='postBody'>${body}</div>
    <div id='interaction'>
      <div id='like-container'></div>
    </div>
  </section>
 `;

  onGetPostInRealTime((querySnapShot) => {
    const feedPostWrapper = feedWrapper.querySelector('#feedPost1');
    querySnapShot.forEach((doc) => {
      const testPostMuro = templateFeedPost(doc.data().title, doc.data().body);
      feedPostWrapper.innerHTML += testPostMuro;
    });
  });

  return feedWrapper;
};
