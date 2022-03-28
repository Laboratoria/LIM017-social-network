export default () => {
  const viewLogin = `
   <h2> Ingresa a Ducky Pets </h2>
  `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewLogin;

  return divElem;
};
