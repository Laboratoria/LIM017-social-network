export const Home = () => {
  const containerLogo = `<figure class= "containerLogo">
                          <img src="Imagenes/Logotipo/Logo-icon.png" alt="Binge Worthy logo" class="topLogo">
                          </figure>
                          <figure class="containerLogoLetters">
                          <img src="Imagenes/Logotipo/Logo-letters-only.png" alt="Binge Worthy logo" class="appName">
                          <figcaption>Binge Worthy</figcaption>
                          <p id="slogan" class="pink">MATCH WITH YOUR STORIES</p>
                          </figure>
                          <button id="createAccBtn">Create an account</button>`;
  const containerLogin = `<div id="goToLogin">
                          <p>Already have an account?</p>
                          <a id="goToLoginBtn" class="pink">Log in</a>
                          </div>`;

  const LogInDivs = containerLogo + containerLogin;
  return LogInDivs;
};
