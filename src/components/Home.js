// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../lib/application/controller.js';
// eslint-disable-next-line import/no-cycle
import { signOff } from '../lib/application/authFirebase.js';
import { postCollection, getPost } from '../lib/application/dataFirestore.js';

export const Home = () => {
  const homePage = `
      <section class="header">
        <div>
            <div><img class="logo" src="img/cuyMap.png" alt="" srcset="" ></div>
            <div class='centerTitle'>
            <a href="" class="titleCuyViajero"> <strong>Cuy Viajero</strong></a>
            </div>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
              <ul class="menu">
                <li><a type="button" class='buttonNav' id='buttonNavStart'>Inicio</a></li>
                <li><a type="button" class='buttonNav' id='buttonNavProfile'>Perfil</a></li>
                <li><a type="button" class='buttonNav' id='singOutBttn'>Cerrar sesión</a></li>
              </ul>
          </div>
      </section>
      <div id='cajita'>
          <section class='abc'>
            <form class='form' target="_blank">
              <p>Cuentanos tu experiencia viajando:</p>
              <p><textarea cols="80"
              rows="10" class="comment-post" id="comment-post" spellcheck="true" placeholder="Escribe aquí ..."></textarea></p>
              <input type="button" id='publish' value="Publicar">
              <input type="reset" id='deleteCamp' value="Borrar todo">
            </form>
          </section>
      </div>
      <div id='post-Publish'>
      <div>aca va el post</div>
      </div>
  `;
  const viewHomePage = document.createElement('div');
  viewHomePage.className = 'viewContainerHome';
  viewHomePage.innerHTML = homePage;
  /* ----------EVENTO PUBLICAR EL POST--------- */
  viewHomePage.querySelector('#publish').addEventListener('click', async () => {
    const postContainer = viewHomePage.querySelector('#comment-post').value;
    const postD = viewHomePage.querySelector('#post-Publish');
    await postCollection(postContainer);
    // agregarle currentUser para enlazar el user con el post
    // enlistar los post
    postD.innerHTML = postContainer;
    const querySnapshot = await getPost();
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
    /* console.log(querySnapshot); */
  });
  /* --------BOTONES BARRA DE NAVEGACIÓN ---------*/
  viewHomePage.querySelector('#buttonNavStart').addEventListener('click', () => {
    onNavigate('/home');
  });
  viewHomePage.querySelector('#buttonNavProfile').addEventListener('click', () => {
    onNavigate('/profile');
  });

  viewHomePage.querySelector('#singOutBttn').addEventListener('click', () => {
    signOff()
      .then(() => onNavigate('/'))
      .catch((error) => {
        console.log('No pudo cerrar sesión', error);
      });
  });
  return viewHomePage;
};
