export const login = () => {
  const htmlLogin = `
    <div class="container">
    <img class="logoPhone" src="./img/logo.png">
        <div class="grid-container">
          <div class="logoLema-container">
            <img class="logoWeb" src="./img/logo.png">
            <p class="lema"> A place where you find people like you. </p>
          </div>
        </div>
      <div class="containerSignUpLogIn">
        <div class="logIn-container">
          <h1>Log In</h1>
          <label class="labels" for="emailLogIn">Email Address</label>
          <input class="input" id="emailLogIn" type="email" placeholder="" />
          <label class="labels" for="passwordLogIn">Password</label>
          <input class="input" id="passwordLogIn" type="password" placeholder="" />
          <button class="btnSignupLogin" id="btnLogIn">Log In</button>
          <input class="input" type="text" placeholder="" readonly />
          <label class="labelOr">OR</label>
          <button class="btnGoogle" id="btnLogInGoogle"><span class="fa-brands fa-google"></span> Log In with Google</button>
          <p class="messageLogInError"></p>
          <p class="messageHaveAnAccount">Already have an account?</p>
          <button class="btnSign" id="signUpHere">Sign Up here.</button>
          <!-- <h3 id="login"></h3> -->
        </div>
      </div>
    </div>
    `;
  return htmlLogin;
};
