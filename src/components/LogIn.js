export const LogIn = () => {
  const containerFullLogo = `<figure class="containerLogo">
                            <img src="Imagenes/Logotipo/Full-logo.png" alt="Binge Worthy logo" class="topLogo">
                            </figure>
                            <figure class="containerLogoLetters">`;
  const containerLogIn = `<div id="containerLogIn">
                            <p id="titleLogIn" class="pink">To get started, enter your phone or email</p>
                            <input type="text" id="user" placeholder="Your email">
                            <div id="passwordContainer">
                            <input type="password" id="password" placeholder="Your password">
                            <i class="icon-eye" id="eyeLogo1" ></i>
                            <i class="icon-eye-blocked" id="eyeSlashLogo1" style="display: none;"></i>
                            </div>
                            <a id="forgotPassword">Did you forget your password?</a>
                            </div>
                            <button id="logInButton">LogIn</button>`;

  const LogInDivs = containerFullLogo + containerLogIn;
  return LogInDivs;
};
