/* eslint-disable no-unused-vars */
import { createElements } from '../util.js';
import { store, onGetPostInRealTime, deletePost } from '../Firebase/firestore.js';
// import { deleteDoc } from '../Firebase/Firebase-util.js';
/* import { doc } from '../Firebase/Firebase-util.js'; */

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

  const formNewPost = feedWrapper.querySelector('#formNewPost');
  const postNew = feedWrapper.querySelector('.btn-new');

  postNew.addEventListener('click', () => {
    formNewPost.classList.remove('hide');
  });

  // event to submit new post
  formNewPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPostTitle = feedWrapper.querySelector('#newPostTitle');
    const newPostBody = feedWrapper.querySelector('#newPostBody');

    store({ title: newPostTitle.value, body: newPostBody.value, userId }, 'publicaciones');
    formNewPost.reset();
    formNewPost.classList.add('hide');
  });

  // Funcion para traer posts al feed
  /*  const templateFeedPost = `
 <section id='postContainer' class= "postContainer">
    <div id='userInfoDiv'></div>
    <p id='user-name'></p>
    <div id='postTitle'>${title}</div>
    <div id='postBody'>${body}</div>
    <button id="btn-deleted" class="btn-deleted-class" data-id="${id}">Delete</button>
    <div id='interaction'>
      <div id='like-container'></div>
    </div>
  </section>
 `; */
  const feedPostWrapper = feedWrapper.querySelector('#feedPost1');
  onGetPostInRealTime((querySnapShot) => {
    let cleaner = '';
    querySnapShot.forEach((doc) => {
      const post = doc.data();
      cleaner += `
     <section id='postContainer' class= "postContainer">
        <div id='userInfoDiv'></div>
        <p id='user-name'></p>
        <div id='postTitle'>${post.title}</div>
        <div id='postBody'>${post.body}</div>
        <button id="btn-deleted" class="btn-deleted-class" data-id="${doc.id}">Delete</button>
        <div id='interaction'>
          <div id='like-container'></div>
        </div>
      </section>
     `;
    });
    feedPostWrapper.innerHTML = cleaner;
    console.log(feedPostWrapper);
    const btnsDeletePost = feedPostWrapper.querySelectorAll('.btn-deleted-class');
    btnsDeletePost.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        deletePost(event.target.dataset.id);
      });
    });
  });

  return feedWrapper;
};
