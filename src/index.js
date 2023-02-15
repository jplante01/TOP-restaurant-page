import './styles.css';
import './images/back.jpeg';
import createHeader from './header';
import createMain from './main';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function initializeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());

  const main = document.getElementById('main');

  main.appendChild(loadHome());
}
const func = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

function populatePage(target) {
  const main = document.getElementById('main');
  const currentPage = document.querySelector('#main > div').classList[0];

  if (target === currentPage) return;
  main.textContent = '';
  main.appendChild(func[target]());
}

function loadEventListeners() {
  const btns = document.querySelectorAll('.nav > button');

  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => populatePage(e.target.dataset.ref));
  });
}

initializeWebsite();
loadEventListeners();
