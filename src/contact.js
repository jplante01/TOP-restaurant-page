function loadContact() {
  const contact = document.createElement('div');
  contact.id = 'contact';
  const blurb = document.createElement('p');

  blurb.textContent = 'Call us at 1-372-4733 for orders and reservations';

  const invite = document.createElement('p');
  invite.textContent = 'Located at 123 Wisteria Lane Cleveland, Ohio';

  contact.appendChild(blurb);
  contact.appendChild(invite);
  return contact;
}

export default loadContact;
