// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../lib/application/controller.js';
// eslint-disable-next-line import/no-cycle
import { signOff } from '../lib/application/authFirebase.js';
import { postCollection, onGetPosts } from '../lib/application/dataFirestore.js';

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
        <div id='box-comment'>
          <section class='abc'>
            <form class='form' target="_blank">
              <p>Cuentanos tu experiencia viajando:</p>
              <p><textarea  class="comment-post" id="comment-post" spellcheck="true" placeholder="Escribe aquí ..."></textarea></p>
              <input type="button" id='publish' value="Publicar">
              <input type="reset" id='deleteCamp' value="Borrar todo">
            </form>
          </section>
      </div>
      <div id='post-Publish'>
      </div>
  `;
  const viewHomePage = document.createElement('div');

  viewHomePage.className = 'viewContainerHome';
  viewHomePage.innerHTML = homePage;

  const postContainer = viewHomePage.querySelector('#post-Publish'); // espacio para almacenar los post
  onGetPosts((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const dataPost = doc.data();
      console.log(doc.id);
      console.log(doc.data());
      // doc.data transforma los datos de un objeto de firebase a un objeto de javascript
      html += `
            <div class='post-separacion'>
            <p id='nameUserPost'>${dataPost.author} </p> 
            <p id='nameUserPost'>${dataPost.date} </p> 
            <p>${dataPost.text} </p>
            <div>
            <button class='btnDelete' $ ${dataPost.author === localStorage.getItem('userEmail') ? '' : 'disabled'} data-id='${doc.id}'>🗑 Delete</button>
            <button class='btnEdit' $ ${dataPost.author === localStorage.getItem('userEmail') ? '' : 'disabled'} data-id='${doc.id}'>Editar</button>
            </div> 
            </div> 
            </div>
            `;
    });
    postContainer.innerHTML = html;
  });

  // --------------BORRAR POST---------------

  // postContainer.querySelector('.btnDelete').addEventListener('click', () => {
  //   console.log('borrando');
  // });
  /* ----------EVENTO PUBLICAR EL POST--------- */
  viewHomePage.querySelector('#publish').addEventListener('click', () => {
    const postBox = viewHomePage.querySelector('#comment-post').value; // Valor del post
    postCollection(postBox);
    postContainer.innerHTML = postBox;
    console.log(postBox);
    /* const querySnapshot = await getPost(); */

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
