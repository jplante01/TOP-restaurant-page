import './styles.css';
import './back.jpeg';
import createHeader from './header.js';
import loadHome from './home.js';
import loadContact from './contact.js';

function initializeWebsite() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(loadHome());
}

function populatePage(tab) {
  console.log(tab);
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
