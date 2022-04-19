import { createAccountByGoogle } from '../../src/Firebase/auth.js';

jest.mock('../../src/Firebase/Firebase-util.js');

describe('Crear una cuenta con google', () => {
  it('debería ser una función', () => {
    expect(typeof createAccountByGoogle).toBe('function');
  });
});
