import { SignUp } from '../../src/components/Register.js';

jest.mock('../../src/Firebase/Firebase-util.js');

describe('Register', () => {
  it('', () => {
    document.body.innerHTML = '<div id=\'root\'><div id= \'register-wrapper\'></div></div>';
    const result = SignUp();
    const pass = result.querySelector('#register-password');
    const passConf = result.querySelector('#confirm-password');
    console.log('que hace pass', pass, passConf);
  });
});
