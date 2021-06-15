const createMenu = () => {
  const main = document.querySelector('#Content');
  const container = document.createElement('div');
  container.classList.add('menu-container', 'container', 'border', 'rounded', 'text-center');
  let temp = document.createElement('h2');
  temp.classList.add('h2', 'title');
  temp.innerHTML = 'Bonanza\'s Special Menu';
  container.appendChild(temp);
  temp = document.createElement('p');
  temp.classList.add('h4', 'mx-3', 'my-5');
  temp.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quod expedita temporibus sequi dicta ad, numquam vero dolores earum voluptatem voluptates animi natus amet molestias modi totam provident illo commodi tempore atque! In eveniet, accusantium ut ea veritatis nihil illum labore temporibus! Ea quam modi praesentium, aliquid quas alias esse!';
  container.appendChild(temp);
  main.appendChild(container);
};
export default createMenu;