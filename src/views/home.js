export const home = () => {
  const postWrite = `
    <section class="home">
      <div class="navWall">
         <img class="logoWall" src="./img/logoH.png">
      </div>
        <div class="headWall">
          <h3 id="nameHomeTagH3"></h3>
          <button class="btnLogOut" id="btnLogOut"> Log Out </button>
        </div>
        <div class="containerWall">
        <div class="containerPost">
          <div class="" id="postForm1">
             <p class="tillePost" >Create Post</p>
             <button id="btnPost" class="postWrite1" name="textarea" rows="20" cols="50" data-toggle="modal" data-target="#myModal">Write something here
             </button>
          </div>
        </div>
        <div id="myModalPost" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <form class="containerPost" id="postForm">
              <p class="tillePost" >Create Post</p>
              <textarea id="posWrite" class="postWrite" name="textarea" rows="10" cols="50" placeholder="Write something here" autofocus></textarea>
              <button class="btnShare" id="btnShare"> Share </button>
            </form>
          </div>
        </div>
          <div class="containerShowPost">
          </div>
        </div>
        <button id="myBtn">Open Modal</button>
        <div id="myModal" class="modal">
            <div class="modal-content">
            <span class="closeDelete">&times;</span>
            <p>Are you sure to delete?</p>
            <button id="btnYes">YES</button>
            <button id="btnCancel">CANCEL</button>
            </div>
        </div>
    </section>`;
  return postWrite;
};
