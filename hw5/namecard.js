async function fetchUsers() {
  const response = await fetch('https://randomuser.me/api/?results=20');
  const data = await response.json();
  console.log(data)
  return data;
}
//async keywork is used to declare an async fn
//async fn: returns a promise
// await promise 

function createCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');
  const info = document.createElement('div');
  info.classList.add('info');
  const img = document.createElement('img');
  const name = document.createElement('p');
  const email = document.createElement('p');
  const phone = document.createElement('p');
  name.textContent = `name: ${user.name.title} ${user.name.last}`;
  email.textContent = `email: ${user.email}`;
  phone.textContent = `phone: ${user.phone}`;
  img.src = user.picture.thumbnail;

  // show the birthday and hide the button when a button is clicked,
  // and hide the birthday when the birthday is clicked and show the button again
  const birthday = document.createElement('p');
  // default is hidden
  birthday.style.display = 'none';
  birthday.textContent = `birthday: ${user.dob.date}`;
  const birthdayButton = document.createElement('button');
  birthdayButton.classList.add('birthday-button');
  birthdayButton.textContent = 'Show DOB';
  // use inline-block to make sure the line height of the button and the birthday is the same
  
  // birthdayButton.onclick = (event) => {
  //   // show the birthday and hide the button
  //   birthday.style.display = 'inline-block';
  //   birthdayButton.style.display = 'none';
  //   console.log(event);
  // };
  
  birthdayButton.addEventListener('click', () => {
    // show the birthday and hide the button
    birthday.style.display = 'inline-block';
    birthdayButton.style.display = 'none';
  });

  birthday.addEventListener('click', () => {
    // hide the birthday and show the button
    birthday.style.display = 'none';
    birthdayButton.style.display = 'inline-block';
  });

  card.appendChild(img);
  info.appendChild(name);
  info.appendChild(email);
  info.appendChild(phone);
  info.appendChild(birthdayButton);
  info.appendChild(birthday);
  card.appendChild(info);

  return card;
}

function createGrid(cards) {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  for (let c of cards){
    grid.appendChild(c);
  }
  // cards.forEach((card) => grid.appendChild(card));
  return grid;
}

async function main() {
  const users = await fetchUsers();
  const cards = users.results.map(createCard); // array
  const grid = createGrid(cards);
  // reload button to refetch users
  const reloadButton = document.createElement('button');
  reloadButton.id = 'reload';
  reloadButton.textContent = 'Reload';
  reloadButton.addEventListener('click', () => {
    window.location.reload();
  });
  document.body.appendChild(grid);
  document.body.appendChild(reloadButton);
}

main();
