import { app } from './firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, updateProfile, sendEmailVerification, signOut  } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';

const auth = getAuth(app);

// FUNCION DE REGISTRO CON EMAIL-----------------------------------------------
export const registerFirebase = (email, password, name) => {
  const registerBeFit = createUserWithEmailAndPassword(auth, email, password);
  return registerBeFit;
};

// REGISTRO CON GOOGLE
const provider = new GoogleAuthProvider();

export const registerAndLoginGoogle = () => {
  const registerAndLoginGoogleBeFit = signInWithPopup(auth, provider);
  return registerAndLoginGoogleBeFit;
};

// FUNCION DE LOGIN CON EMAIL-----------------------------------------------

export const loginFirebase = (email, password) => {
  const loginBefit = signInWithEmailAndPassword(auth, email, password);
  return loginBefit;
};

// OBTENER EL USUARIO ACTUAL con sus propiedades
export const getCurrentUser = () => {
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    // const displayName = user.displayName;
    // const email = user.email;
    // const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    // onst uid = user.uid;
    // return user;
  }
  return user;
};

// ACTUALIZA EL PERFIL DEL USUARIO
export const updaterUserProfile = (name) => {
  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: 'https://example.com/jane-q-user/profile.jpg',
  }).then(() => {
  // Profile updated!
    alert('Registro exitoso');
  }).catch((error) => {
  // An error occurred
  // ...
  });
};

// VERIFICAR REGISTRO ENVIANDO UN CORREO AL EMAIL
export const emailVerification = () => {
  sendEmailVerification(auth.currentUser)
    .then((result) => {
      console.log(result);
    // Email sent.
    }).catch((error) => {
      console.log(error);
    // An error happened.
    });
};

// SIGN OUT - CERRAR SESIÓN
export const singOut = () => {
  signOut(auth)
    .then((result) => {
      console.log(result);
      console.log('cerrar');
    })
    .catch((error) => {
      console.log(error);
    });
};
