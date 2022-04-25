import { storeUsers, store } from '../../src/Firebase/firestore.js';
// importación añadida, borrar si no funciona
import { collection } from '../../src/Firebase/Firebase-util';

jest.mock('../../src/Firebase/Firebase-util.js');

describe('Obtener datos', () => {
  it('debería ser una función', () => {
    expect(typeof storeUsers).toBe('function');
  });
});

// Intento dos- sino corre lo borro o comento
// collection de firebase se llamó una vez con db y recetas como parámetro
// console.log(collection.mock);
// getDocs se llama con el valor de retorno de collection de firebase
// retorna una promesa que resuelve a un array
describe('ObtenerDatos', () => {
  it('debería ser una función', () => {
    const dbTest = {};
    const result = storeUsers(dbTest);
    console.log(collection.mock);
    expect(collection.mock.calls[0]).toEqual([dbTest, 'users']);
  });
});

describe('Obtener datos creo', () => {
  it('debería ser una función', () => {
    expect(typeof store).toBe('function');
  });
});
