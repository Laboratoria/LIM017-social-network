import { onNavigate } from '../../src/main.js';

jest.mock('../../src/Firebase/Firebase-util.js');

describe('Función onNavigate', () => {
  it('La función onNavigate debe cargar vista Login', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/Login');
    const divRoot = document.querySelector('#login-btn');
    expect(divRoot.textContent).toBe('Iniciar sesion');
  });
});
