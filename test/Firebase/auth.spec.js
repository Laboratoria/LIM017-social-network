import {
  createAccountByGoogle, /* CreateAccount,
  signInWithPopup,
  LoginByEmailPassword, */
} from '../../src/Firebase/auth';
import { signInWithEmailAndPassword } from '../../src/Firebase/Firebase-util';

jest.mock('../../src/Firebase/Firebase-util.js');

describe('Crear cuenta con google', () => {
  it('debería ser una función', () => {
    expect(typeof createAccountByGoogle).toBe('function');
  });
});

describe('', () => {
  it('Muestra un mesnaje de error', () => {
    const signUpInWithEmailAndPassword = jest.fn();
    signUpInWithEmailAndPassword.mockRejectedValue({ error: 'password/mismatch' });
  });
});
