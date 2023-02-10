import './styles.css';
import './back.jpeg';
import createHeader from './header.js';
import loadHome from './home.js';


function initializeWebsite() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(loadHome());
}

initializeWebsite();
