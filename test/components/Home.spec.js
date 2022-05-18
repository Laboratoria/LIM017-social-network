// importamos la funcion que vamos a testear
import { Home } from '../../src/components/Home.js';
//import { signOut } from '../../src/lib/application/__mock__/init.js';
import { signOut } from '../../src/lib/application/init.js';

jest.mock('../../src/lib/application/init.js');
jest.mock('../../src/lib/application/dataFirestore.js');
jest.mock('../../src/lib/application/controller.js');

describe('cerrar sesion', () => {
  it('debería ejecutar el click', () => {
    const viewHomePage = Home();
    viewHomePage.querySelector('#singOutBttn').dispatchEvent(new Event('click'));
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
