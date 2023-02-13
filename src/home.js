import tiki from './images/tiki.png';

function loadHome() {
  const home = document.createElement('div');
  home.id = home;
  home.classList.add('f-col');

  const blurb = document.createElement('p');
  blurb.textContent = 'Sit totam quaerat dolorum adipisicing modi Autem sit nostrum odit aut perferendis. Rem explicabo doloremque nihil repellat error Error sit fuga assumenda neque harum Facere quo explicabo voluptate aspernatur id?orem';

  const tikiImg = new Image();
  tikiImg.src = tiki;
  tikiImg.id = 'tiki';
  const invite = document.createElement('p');
  invite.textContent = 'Consectetur vitae sit cumque libero expedita Autem aliquam laboriosam vitae alias accusantium eaque tenetur. Pariatur a facere officia dolores perspiciatis! Harum eveniet eligendi doloribus repellat quaerat Optio amet commodi dolore';

  home.appendChild(blurb);
  home.appendChild(tikiImg);
  home.appendChild(invite);
  return home;
}

export default loadHome;
