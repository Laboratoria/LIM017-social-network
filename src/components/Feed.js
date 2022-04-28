/* eslint-disable no-unused-vars */
import {
  store, onGetPostInRealTime, deletePost, getSinglePost, updatePost,
} from '../Firebase/firestore.js';

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

  // Cuadros de texto rellenables
  const newPostTitle = feedWrapper.querySelector('#newPostTitle');
  const newPostBody = feedWrapper.querySelector('#newPostBody');
  // variable que me indica el estado de edición
  let editStatus = false;
  let id = '';
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
        <button id="btn-edit" class="btn-edit-class" data-id="${doc.id}">Edit</button>
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
    const btnsEdit = feedPostWrapper.querySelectorAll('.btn-edit-class');
    btnsEdit.forEach((btnE) => {
      btnE.addEventListener('click', async (e) => {
        formNewPost.classList.remove('hide');
        const doc = await getSinglePost(e.target.dataset.id);
        const post = doc.data();
        newPostTitle.value = post.title;
        newPostBody.value = post.body;

        editStatus = true;
        id = doc.id;
      });
    });
  });

  // event to submit new post
  formNewPost.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!editStatus) {
      store({ title: newPostTitle.value, body: newPostBody.value, userId }, 'publicaciones');
    } else {
      updatePost(id, { title: newPostTitle.value, body: newPostBody.value, userId });
      editStatus = false;
    }

    formNewPost.reset();
    formNewPost.classList.add('hide');
  });

  return feedWrapper;
};
