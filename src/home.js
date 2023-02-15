import tiki from './images/tiki.png';

function loadHome() {
  const home = document.createElement('div');
  home.id = 'home';
  home.classList.add('f-col');

  const blurb = document.createElement('p');
  blurb.textContent = 'Come to Island Grill to enjoy gourmet foods in our cozy, island-inspired dining room. We use nothing but healthy fresh ingredients, because we want our guests to enjoy the finest dishes.';

  const tikiImg = new Image();
  tikiImg.src = tiki;
  tikiImg.id = 'tiki';
  const invite = document.createElement('p');
  invite.textContent = 'Call today to reserve a cozy booth, or just come by to be seated at the bar. Delivery and pickup is available... call the number on our contact page!';

  home.appendChild(blurb);
  home.appendChild(tikiImg);
  home.appendChild(invite);
  return home;
}

export default loadHome;
