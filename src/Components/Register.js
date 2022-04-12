import { onNavigate } from '../main.js';
import { registerWithEmail } from '../firebase/authFunctions.js';
import { signInWithGoogle } from '../firebase/authFunctions.js';

export const Register= () =>{

  let RegisterSection= document.createElement("section");
  RegisterSection.innerHTML = `<section>
      <main class="containerRegister">
        <p id="registerApp" class="registerApp">Regístrate</p>
          <div class="txtRegister">
              <p class="txtAccount">Nickname</p>
              <input type="text" id="nickName" class="infoRegister"></input>
              <p class="txtAccount">Email</p>
              <input type="email" id="email" class="infoRegister"></input>
              <p class="txtAccount">Password</p>
              <input id="password" class="infoRegister" type="password"></input>
              <button id="buttonAccount">Crear cuenta</button>
        </div>
    </main>
  </section>`

  let LogotypeSection=document.createElement("section");
  LogotypeSection.innerHTML =`<section>
      <img class="logotypeRegister" src="./img/LogoTellMeBlanco.svg">
  </section>`

  let ConditionsSection=document.createElement("section");
  ConditionsSection.innerHTML =`<section class="sectionBody">
         <div>
           <p class="textConditions">Al registrarte aceptas nuestras<br>políticas de privacidad y uso de<br>datos personales.</p>
         </div>
  </section>`

  let ContainerBackground=document.createElement("section");
  ContainerBackground.innerHTML =`<section>
      <main class="containerBackground">
      </main>
  </section>`

  RegisterSection.appendChild(ContainerBackground);
  RegisterSection.appendChild(LogotypeSection);
  RegisterSection.appendChild(ConditionsSection);

  RegisterSection.classList.add("RegisterSection");
  RegisterSection.querySelector("#buttonAccount").addEventListener('click', () => onNavigate ('/'));

  RegisterSection.querySelector("#buttonAccount").addEventListener('click', () => {
    const loginEmail = document.getElementById("email").value;
    const loginPassword = document.getElementById("password").value;
    registerWithEmail(loginEmail,loginPassword)
  });

  RegisterSection.querySelector("#buttonAccount").addEventListener('click', () => {
   let backgroundBody = document.getElementById("bodies")
   backgroundBody.classList.remove("containerBackground")
   backgroundBody.classList.add("bodyBackground")
 });

  return RegisterSection;
};
