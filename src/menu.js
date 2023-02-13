function loadMenu() {
  const menu = document.createElement('div');
  menu.id = menu;
  menu.classList.add('f-col');
  const blurb = document.createElement('p');
  blurb.textContent = 'Sit totam quaerat dolorum adipisicing modi Autem sit nostrum odit aut perferendis. Rem explicabo doloremque nihil repellat error Error sit fuga assumenda neque harum Facere quo explicabo voluptate aspernatur id?orem';
  menu.appendChild(blurb);
  return menu;
}
export default loadMenu;
