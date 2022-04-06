export const Register = () => {
  const containerFullLogo = `<figure class="containerLogo">
                            <img src="Imagenes/Logotipo/Full-logo.png" alt="Binge Worthy logo" class="topLogo">
                            </figure>
                            <figure class="containerLogoLetters">`;
  const containerRegister = `<div id="containerRegister">
                            <p id="titleRegister" class="pink">Creat your account</p>
                            <div id="containerNewRegister">
                            <input type="text" id="newUserDisplayName" placeholder="Name">
                            <input type="text" id="newUser" placeholder="Your email address">
                            <div id="newPasswordContainer">
                            <input type="password" id="newUserPassword" placeholder="Enter your new password">
                            <i class="icon-eye" id="eyeLogo1" ></i>
                            <i class="icon-eye-blocked" id="eyeSlashLogo1" style="display: none;"></i>
                            </div>`;
  const termsOfService = `<p id="titleRegister" class="pink">By signing up you agree to the
                            Terms of Serviceand the Privacy Policy,
                            including the policyof use of cookies.
                            Binge Worthy Too can use your contact
                            information like your email and
                            number of phone.  More information here</p>
                            <button class="checkIn">Check In</button>`;

  const LogInDivs = containerFullLogo + containerRegister + termsOfService;
  return LogInDivs;
};
