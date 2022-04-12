import { onNavigate } from '../main.js';
export const Register = () => {
   const HomeDiv = document.createElement("div");
  HomeDiv.textContent = "Bienvenido al Registro";
  const buttonHome = document.createElement("button");
  
  buttonHome.textContent="Regresar al Home";
   buttonHome.addEventListener('click', () => onNavigate('/'));
   
  HomeDiv.appendChild(buttonHome);
  
  return HomeDiv;
};