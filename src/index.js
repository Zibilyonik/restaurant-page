import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const content = document.querySelector('#Content');
const btncontainer = document.createElement('div');
btncontainer.classList.add('btngroup', 'row', 'mx-5', 'my-5');
const btnhome = document.createElement('button');
btnhome.classList.add('btn', 'btn-primary', 'col', 'mx-1', 'btnread');
btnhome.innerHTML = 'Home';
const btnmenu = document.createElement('button');
btnmenu.classList.add('btn', 'btn-primary', 'col', 'mx-1', 'btnread');
btnmenu.innerHTML = 'Menu';
const btncontact = document.createElement('button');
btncontact.classList.add('btn', 'btn-primary', 'col', 'mx-1', 'btnread');
btncontact.innerHTML = 'Contact Us';
btncontainer.appendChild(btnhome);
btncontainer.appendChild(btnmenu);
btncontainer.appendChild(btncontact);
content.appendChild(btncontainer);
createHome();
btnhome.addEventListener('click', () => {
  const ModulePage = document.querySelector('.container');
  content.removeChild(ModulePage);
  createHome();
});
btnmenu.addEventListener('click', () => {
  const ModulePage = document.querySelector('.container');
  content.removeChild(ModulePage);
  createMenu();
});
btncontact.addEventListener('click', () => {
  const ModulePage = document.querySelector('.container');
  content.removeChild(ModulePage);
  createContact();
});
