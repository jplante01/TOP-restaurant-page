function loadContact() {
  const contact = document.createElement('div');
  contact.classList.add('home');
  const blurb = document.createElement('p');
  blurb.textContent = "Sit totam quaerat dolorum adipisicing modi Autem sit nostrum odit aut perferendis. Rem explicabo doloremque nihil repellat error Error sit fuga assumenda neque harum Facere quo explicabo voluptate aspernatur id?orem"

 
  const invite = document.createElement('p');
  invite.textContent = "Consectetur vitae sit cumque libero expedita Autem aliquam laboriosam vitae alias accusantium eaque tenetur. Pariatur a facere officia dolores perspiciatis! Harum eveniet eligendi doloribus repellat quaerat Optio amet commodi dolore"

  contact.appendChild(blurb);
  contact.appendChild(invite);
  return contact;
}

export default loadContact;
