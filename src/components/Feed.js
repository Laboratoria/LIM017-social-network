import { createElements } from '../util.js';
import { store } from '../Firebase/firestore.js';

export const Feed = () => {
  const userId = sessionStorage.getItem('uid');

  // getPost(userId).then(() => {
  const feedDivWrapper = document.createElement('div');
  feedDivWrapper.id = 'feedWrapper';
  feedDivWrapper.className = 'feed-wrapper';

  const logoFeed = document.createElement('img');
  logoFeed.src = 'imagenes/logo.png';
  logoFeed.id = 'feed-logo';
  logoFeed.className = 'logo';

  feedDivWrapper.appendChild(logoFeed);

  // Texto acompañante al boton del
  const texto = document.createElement('Div');
  texto.textContent = 'Crear nueva publicación';
  texto.id = 'text-btn-addpost';
  feedDivWrapper.appendChild(texto);
  // Boton para publicar un nuevo postDiv
  const btnNewPost = document.createElement('button');
  btnNewPost.id = 'btn-new-post';
  btnNewPost.className = 'submit-buttons';
  btnNewPost.innerHTML = '<i class = "fa-solid fa-plus add-plus-icon"></i>';

  feedDivWrapper.appendChild(btnNewPost);

  // boton con addeventlistener
  // formulario para crear una nueva publicacion
  const newPostForm = document.createElement('form');
  newPostForm.id = 'new-form-post';
  newPostForm.classList.add('hide');
  const newPostTitle = document.createElement('input');
  newPostTitle.placeholder = 'coloca el titulo de tu publicación';
  newPostTitle.className = 'inputs-style';
  const newPostBody = document.createElement('textarea');
  newPostBody.placeholder = 'escribe tu publicación';
  newPostBody.className = 'inputs-style';
  const btnPublish = document.createElement('button');
  btnPublish.setAttribute('type', 'submit');
  btnPublish.textContent = 'Publicar';
  btnPublish.className = 'submit-buttons';

  newPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    store({ title: newPostTitle.value, body: newPostBody.value, userId }, 'publicaciones');
  });

  newPostForm.append(newPostTitle, newPostBody, btnPublish);

  feedDivWrapper.appendChild(newPostForm);

  // funcion para el boton
  btnNewPost.addEventListener('click', () => {
    newPostForm.classList.remove('hide');
    newPostForm.classList.add('view');
  });
  btnPublish.addEventListener('click', () => {
    newPostForm.classList.add('hide');
  });
  const [
    postDiv,
    userInfoDiv,
    textPost,

    interactionDiv,
  ] = createElements(
    'div',
    'div',
    'textarea',
    'div',
  );

  postDiv.id = 'post-container';
  postDiv.className = 'test';

  // Div info user
  userInfoDiv.id = 'user-info-container';
  userInfoDiv.className = 'test';

  // div text post
  textPost.id = 'post-text';
  textPost.name = 'post-text';
  textPost.className = 'test';
  textPost.placeholder = 'Prueba prueba';

  interactionDiv.className = 'test1';
  interactionDiv.id = 'interaction';

  const [
    userImg,
    userName,
    likeDiv,
    favDiv,
  ] = createElements(
    'img',
    'h4',
    'div',
    'div',
  );

  userImg.id = 'user-image-profile';
  userImg.src = 'imagenes/goose-pf.jpg';

  userName.id = 'user-name';
  userName.textContent = sessionStorage.getItem('username');

  likeDiv.id = 'like-container';
  likeDiv.className = 'test';

  favDiv.id = 'fav-container';
  favDiv.className = 'test';

  const [
    btnLike,
    btnDislike,
    btnFav,
  ] = createElements('button', 'button', 'button');

  btnLike.textContent = 'Like';
  btnLike.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';

  btnDislike.textContent = 'Dislike';
  btnDislike.innerHTML = '<i class="fa-solid fa-thumbs-down"></i>';

  btnFav.id = 'btn-fav';
  btnFav.innerHTML = '<i class="fa-solid fa-trillium"></i>';
  btnFav.textContent = 'Patita';

  likeDiv.append(btnLike, btnDislike);
  favDiv.appendChild(btnFav);
  userInfoDiv.append(userImg, userName);
  interactionDiv.append(likeDiv, favDiv);

  feedDivWrapper.append(
    postDiv,
    userInfoDiv,
    textPost,
    interactionDiv,
  );
  // });
  return feedDivWrapper;
};
