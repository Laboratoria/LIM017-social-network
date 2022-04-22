export const register = () => {
  const htmlRegister = `
    <div class="container">
    <img class="logoPhone" src="./img/logo.png">
      <div class="grid-container">
        <div class="logoLema-container">
          <img class="logoWeb" src="./img/logo.png">
          <p class="lema"> A place where you find people like you. </p>
        </div>
      </div>
      <div class="containerSignUpLogIn">
        <div class="signUp-container">
          <div class="signUpContent">
            <h1>Sign up</h1>
            <label class="labels" for="fullName"> Name </label>
            <input class="input" id="name" type="text" placeholder=" "/>
            <label class="labels" for="lastName"> Last Name </label>
            <input class="input" id="lastName" type="text" placeholder=" "/>
            <label class="labels" for="emailSignUp"> Email </label>
            <input class="input" id="emailSignUp" type="email" placeholder=" "/>
            <label class="labels" for="passwordSignUp"> Password </label>
            <input class="input" id="passwordSignUp" type="password" placeholder=" " />
            <button class="btnSignupLogin" id="btnRegister">Sign Up</button><br>
            <button class="btnGoogle" id="btnSignUpGoogle"> <span class="fa-brands fa-google"> </span> Sign Up with Google</button>
            <p class="messageSignUpError"></p>
            <p class="messageHaveAnAccount">Already have an account?</p>
            <button class="btnSign" id="logInHere"> Log In </button>
          </div>
        </div>
      </div>
    </div>`;
  return htmlRegister;
};
