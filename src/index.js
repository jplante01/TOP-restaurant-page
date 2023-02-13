import './styles.css';
import './back.jpeg';
import createHeader from './header.js';
import createMain from './main.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function initializeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());

  const main = document.getElementById('main');

  main.appendChild(loadContact());
}

function populatePage(target) {
  const main = document.getElementsById('main');
  console.log(main.id);
  if (target.id === main.id) {
    console.log('match!');
  }

  // main.textContent = "";
  // main.appendChild();
}

function loadEventListeners() {
  document.getElementById('Home').addEventListener('click', (e) => {
    populatePage(e.target);
  });

  document.getElementById('Menu').addEventListener('click', (e) => {
    populatePage(e.target);
  });

  document.getElementById('Contact').addEventListener('click', (e) => {
    populatePage(e.target);
  });
}

initializeWebsite();
loadEventListeners();
