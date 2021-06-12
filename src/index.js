import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

const list = ["home", "menu", "contact"];
const content = document.querySelector('#Content');

for(let i = 0; i < list.length; i++){
  const temp = list[i]+"btn";
  console.log(temp)
}
createContact();
createHome();
createMenu();
console.log("Bonk!")

const btncontainer = document.createElement('div');
btncontainer.classList.add('btngroup', 'row');
const btnread = document.createElement('button');
btnread.classList.add('btn', 'btn-primary', 'col-3', 'mx-auto', 'btnread');
btnread.innerHTML = 'Home';
btncontainer.appendChild(btnread);
content.appendChild(btncontainer);