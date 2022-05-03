import { onNavigate } from '../../src/main.js';
// import { routes } from '../../src/components/Router.js';
// import { SignUp } from '../../src/components/Register.js';

jest.mock('../../src/Firebase/Firebase-util.js');

describe('Función onNavigate', () => {
  it('La función onNavigate debe cargar vista register', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/Register');
    const divRoot = document.querySelector('#gmail-signup');
    expect(divRoot.textContent).toBe('Registrarse con Gmail');
  });
});
