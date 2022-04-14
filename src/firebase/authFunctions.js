import { app } from "./firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const auth = getAuth();

export const registerWithEmail = (loginEmail,loginPassword) => {
  console.log(loginEmail,loginPassword)
createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      onNavigate('/login');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};
