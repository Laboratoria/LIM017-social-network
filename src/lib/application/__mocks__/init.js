// funciones relacionadas dentro de firebase

export const signInWithPopup = () => Promise.resolve({});
export const getAuth = () => Promise.resolve({});
export const GoogleAuthProvider = jest.fn(() => ({}));
// export class GoogleAuthProvider {}

export const createUserWithEmailAndPassword = jest.fn((auth, emailUser, passwordUser) => Promise.resolve({ user: { email: emailUser } }));
export const signInWithEmailAndPassword = ( auth, emailUser, passwordUser) => Promise.resolve({ user: { email: emailUser } });
// export const signInWithEmailAndPassword = () => Promise.resolve({});
/// / funciones relacionadas dentro de authFirebase
export const initializeApp = jest.fn(() => ({}));
export const getFirestore = () => Promise.resolve({});
export const addDoc = () => Promise.resolve({});
export const signOut = jest.fn(() => Promise.resolve({}));
