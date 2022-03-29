export default () => {
  const viewPerfil = `
        <h2> Perfil de Ducky Pets </h2>
    `;
  const divElem = document.createElement('div');

  divElem.innerHTML = viewPerfil;

  return divElem;
};
