jest.mock('../../src/Firebase/Firebase-util.js');

describe('Password Input', () => {
  it('La función debe devolverme un texto', () => {
    

    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/Login');
    const divRoot = document.querySelector('#login-btn');
    expect(divRoot.textContent).toBe('Iniciar sesion');
  });
});
