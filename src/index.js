import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

const list = ["home", "menu", "contact"];
const content = document.querySelector('#Content');
createHome();
for(let i = 0; i < list.length; i++){
  const temp = "btn"+list[i];
  console.log(temp)
}

const btncontainer = document.createElement('div');
btncontainer.classList.add('btngroup', 'row', 'mx-5', 'mt-5');
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
btnhome.addEventListener('click', () => {
  createHome();
});
btnmenu.addEventListener('click', () => {
  createMenu();
});
btncontact.addEventListener('click', () => {
  createContact();
});
