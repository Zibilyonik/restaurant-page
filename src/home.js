function createHome() {
  const main = document.querySelector('#Content');
  const container = document.createElement('div');
  container.classList.add('home-container', 'container');
  let temp = document.createElement('h2');
  temp.classList.add('h2', 'title');
  temp.innerHTML = `Bonanza's Banana Emporium`;
  container.appendChild(temp);
  main.appendChild(container);
}
export default createHome;