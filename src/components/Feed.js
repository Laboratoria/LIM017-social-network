import { createElements } from '../util.js';
import { store } from '../Firebase/firestore.js';

export const Feed = () => {
  const feedDivWrapper = document.createElement('div');
  feedDivWrapper.id = 'feedWrapper';
  feedDivWrapper.className = 'feed-wrapper';

  const logoFeed = document.createElement('img');
  logoFeed.src = 'imagenes/logo.png';
  logoFeed.id = 'feed-logo';
  logoFeed.className = 'logo';

  feedDivWrapper.appendChild(logoFeed);

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
  userName.textContent = 'Pepita Perez';

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
  btnDislike.textContent = 'Dislike';

  btnFav.id = 'btn-fav';
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

  return feedDivWrapper;
};
