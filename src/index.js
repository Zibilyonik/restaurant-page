import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";
const list = ["home", "menu", "contact"];

for(let i = 0; i < list.length; i++){
  const temp = list[i]+"btn";
  console.log(temp)
}

console.log("Bonk!")