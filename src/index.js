import './styles.css';
import './back.jpeg';
import createHeader from './header.js';


function initializeWebsite() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
}

initializeWebsite();
