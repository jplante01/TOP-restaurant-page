import tiki from './images/tiki.png';

function loadHome() {
  const home = document.createElement('div');
  home.classList.add('home');
  const blurb = document.createElement('p');
  blurb.textContent = "Sit totam quaerat dolorum adipisicing modi Autem sit nostrum odit aut perferendis. Rem explicabo doloremque nihil repellat error Error sit fuga assumenda neque harum Facere quo explicabo voluptate aspernatur id?orem"

  const tikiImg = new Image();
  tikiImg.src = tiki;
  
  home.appendChild(blurb);
  home.appendChild(tikiImg);

  return home;
}

export default loadHome;
