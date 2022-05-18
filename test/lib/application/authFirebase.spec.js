import { registerWithEmail, loginUser } from '../../../src/lib/application/authFirebase';
import { createUserWithEmailAndPassword } from '../../../src/lib/application/init';

jest.mock('../../../src/lib/application/init.js');
describe('testeando la función registrar', () => {
  it('funciona y recibe los argumentos correctos', async () => {
    const resolved = await registerWithEmail('miemail@gmail.com', '123456');
    expect(JSON.stringify(resolved)).toBe(JSON.stringify({ user: { email: 'miemail@gmail.com' } }));
    expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('miemail@gmail.com');
    expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
  });
});

describe('testeando la función login', () => {
  it('funciona y recibe los argumentos correctos', async () => {
    const resolvedLogin = await loginUser('miemail@gmail.com', '123456');
    expect(resolvedLogin).toStrictEqual({ user: { email: 'miemail@gmail.com' } });
  });
});
