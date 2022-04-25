import { createElements } from '../util.js';
import { store } from '../Firebase/firestore.js';

export const Feed = () => {
  const feedDivWrapper = document.createElement('div');
  feedDivWrapper.id = 'feedWrapper';
  feedDivWrapper.className = 'feed-wrapper';

  const [
    logoFeed,
  ] = createElements('img');
  logoFeed.src = 'imagenes/logo.png';
  logoFeed.id = 'feed-logo';
  logoFeed.className = 'logo';

  feedDivWrapper.appendChild(logoFeed);

  const [
    postDiv,
    userInfoDiv,
    textPost,
    likeDiv,
    favDiv,
  ] = createElements('div', 'div', 'input', 'div', 'div');

  postDiv.id = 'post-container';
  postDiv.className = 'test';

  // Div info user
  userInfoDiv.id = 'user-info-container';
  userInfoDiv.className = 'test';

  const
    [userImg,
      userName,
    ] = createElements('img', 'h4');

  userImg.id = 'user-image-profile';
  userImg.src = 'imagenes/goose-pf.jpg';

  userName.id = 'user-name';
  userName.textContent = 'Pepita Perez';

  userInfoDiv.append(userImg, userName);

  // div text post
  textPost.id = 'post-text';
  textPost.className = 'test';
  textPost.placeholder = 'Prueba prueba';

  const interactionDiv = document.createElement('div');
  interactionDiv.className = 'test1';
  interactionDiv.id = 'interaction';

  likeDiv.id = 'like-container';
  likeDiv.className = 'test';

  const [
    btnLike,
    btnDislike,
  ] = createElements('button', 'button');

  btnLike.textContent = 'Like';
  btnDislike.textContent = 'Dislike';

  likeDiv.append(btnLike, btnDislike);

  favDiv.id = 'fav-container';
  favDiv.className = 'test';

  const btnFav = document.createElement('button');
  btnFav.id = 'btn-fav';
  btnFav.textContent = 'Patita';

  favDiv.append(btnFav);

  interactionDiv.append(likeDiv, favDiv);

  feedDivWrapper.append(
    postDiv,
    userInfoDiv,
    textPost,
    interactionDiv,
  );

  return feedDivWrapper;
};
