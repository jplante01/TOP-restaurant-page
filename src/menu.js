const json = require('./menu_items.json');
// const menuItems = JSON.parse(json);

function loadMenu() {
  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.classList.add('grid');
  
  function generateMenuItem(name, description, cost) {
    const item = document.createElement('div');
    item.classList = 'menu-item f-col';

    const itemName = document.createElement('h1');
    itemName.textContent = name;
    itemName.classList.add('item-name');
    item.appendChild(itemName);

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    itemDescription.classList.add('item-description');
    item.appendChild(itemDescription);

    const itemCost = document.createElement('h2');
    itemCost.textContent = cost;
    itemCost.classList.add('item-cost');
    item.appendChild(itemCost);

    return item;
  }

  json.forEach((obj) => {
    menu.appendChild(generateMenuItem(obj.name, obj.description, obj.price));
  });

  return menu;
}
export default loadMenu;
