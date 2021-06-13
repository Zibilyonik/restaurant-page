function createContact() {
  const main = document.querySelector('#Content');
  const container = document.createElement('div');
  container.classList.add('home-container', 'container');
  let temp = document.createElement('h2');
  temp.classList.add('h2', 'title');
  temp.innerHTML = `Get In Contact With Mr. Bonanza!`;
  container.appendChild(temp);
  main.appendChild(container);
}
export default createContact;