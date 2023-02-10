
function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  const banner = document.createElement('h1');
  banner.classList.add('banner')
  banner.textContent = 'Island Grill';
  header.appendChild(banner);
  

  const nav = document.createElement('div');
  nav.classList.add('nav')

  function createButton(buttonTitle) {
    const button = document.createElement('button');
    button.classList.add('nav-button');
    button.textContent = buttonTitle
    nav.appendChild(button);
  }

  createButton('Home');
  createButton('Menu');
  createButton('Contact');
  
  header.appendChild(nav);
  return header;
}


export default createHeader

