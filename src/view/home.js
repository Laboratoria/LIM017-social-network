export default () => {
  const viewHome = `
    <h2> Bienvenidos a Ducky Pets </h2>
  `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  return divElem;
};
