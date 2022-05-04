/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import {
  store,
  onGetPostInRealTime,
  deletePost,
  getSinglePost,
  updatePost,
} from '../Firebase/firestore.js';

export const Feed = () => {
  const userId = sessionStorage.getItem('uid');
  // Si no estás registrado
  if (userId == null) {
    alert('Registrate para ver el muro');
    window.location.href = '/Login';
  }

  const feedWrapper = document.createElement('div');
  feedWrapper.id = 'feed-wrapper';
  const templateFeed = `
  <section id="feed" class= "contenedor-section">
    <img id="feed-logo" class="logo-feed" src="imagenes/logo.png">
    <div id="create-new-post">
      <p> Hola ${sessionStorage.getItem('username')}</p>
      <button id="btn-new-post" class="btn-new"> Crear Nueva Publicación </button>
    </div>
    <div class= "form-container">
      <form id = "form-new-post" class = "hide form-container">
        <input type = "text" id ="new-post-title" class = "new-post-title" placeholder = "Coloca el título de tu publicación" value= "">
        <input type = "text" id ="new-post-body" class="new-post-body" placeholder = "Escribe aquí tu publicación" value="">
        <button type = "submit" id = "publish-btn" value="Publish"> Publicar </button>
      </form>
    </div>
    <div id='feed-post1'></div>
  </section>
  `;
  feedWrapper.innerHTML += templateFeed;

  const formNewPost = feedWrapper.querySelector('#form-new-post');
  const postNew = feedWrapper.querySelector('.btn-new');

  postNew.addEventListener('click', () => {
    formNewPost.classList.remove('hide');
  });

  // Cuadros de texto rellenables
  const newPostTitle = feedWrapper.querySelector('#new-post-title');
  const newPostBody = feedWrapper.querySelector('#new-post-body');
  // variable que me indica el estado de edición
  let editStatus = false;
  let id = '';
  const feedPostWrapper = feedWrapper.querySelector('#feed-post1');
  onGetPostInRealTime((querySnapShot) => {
    let cleaner = '';
    querySnapShot.forEach((doc) => {
      const post = doc.data();

      // comprobar el usuario de la sesion con el que hizo el post con operador ternario

      const edit = (userId === post.userId) ? `
        <button id="btn-deleted" class="btn-deleted-class" data-id="${doc.id}">Delete</button>
        <button id="btn-edit" class="btn-edit-class" data-id="${doc.id}">Edit</button>` : '';

      cleaner += `

      <section id='post-container' class= "post-container">
        <div id='user-info-div'>
          <p id='user-name'></p>
        </div>
        <div id='post-title'>${post.title}</div>
        <div id='post-body'>${post.body}</div>
        <div id="interaction" class="postnteraction">
          ${edit}
          <div id='like-container'></div>
        </div>
      </section>
    `;
    });
    feedPostWrapper.innerHTML = cleaner;

    // Modal deleted
    const btnsDeletePost = feedPostWrapper.querySelectorAll('.btn-deleted-class');
    btnsDeletePost.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        // eslint-disable-next-line no-restricted-globals
        const confirmDelete = confirm('¿Seguro que quieres borrar esta publicación?');
        if (confirmDelete) {
          deletePost(event.target.dataset.id);
        }
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
    const title = newPostTitle.value.trim();
    const body = newPostBody.value.trim();
    if (title === '' || body === '') {
      alert('Por favor completa todos los campos de tu publicación');
      return;
    }

    if (!editStatus) {
      store({
        title: newPostTitle.value, body: newPostBody.value, userId, timestamp: Date.now(),
      }, 'publicaciones');
    } else {
      updatePost(id, { title: newPostTitle.value, body: newPostBody.value, userId });
      editStatus = false;
    }

    formNewPost.reset();
    formNewPost.classList.add('hide');
  });
  return feedWrapper;
};
