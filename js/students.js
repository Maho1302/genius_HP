//show section

function showOne(id) {
  document.querySelectorAll('.is-hidden').forEach(function (el) {
    el.style = 'display: none;';
  });

  document.querySelector(".is-hidden[id='" + id + "']").style =
    'display: block;';
}

//students section

async function getStudents() {
  let response = await fetch(
    'https://hp-api.onrender.com/api/characters/students'
  );
  let students = await response.json();

  let student = await fetch(
    `https://hp-api.onrender.com/api/character/${students.id}`
  );

  const allStudents = document.querySelector('#students');
  let studentRes = await student.json();

  for (let student of students) {
    const div = document.createElement('div');
    div.className = 'card';

    let studentImg = document.createElement('img');
    studentImg.setAttribute('src', `${student.image}`);
    studentImg.setAttribute('alt', 'character_photo');
    studentImg.className = 'bgrImg';

    const divInner = document.createElement('div');
    divInner.className = 'cardText';

    const studentName = document.createElement('p');
    studentName.textContent = student.name;
    studentName.classList.add('characterName', 'innerText');

    const alternateName = document.createElement('p');
    alternateName.textContent = student.alternate_names[0];
    alternateName.className = 'margin';

    const house = document.createElement('p');
    house.textContent = student.house;
    house.className = 'margin';

    const dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = student.dateOfBirth;

    const moreInfo = document.createElement('div');
    moreInfo.innerHTML =
      'Більше інформації <img class="arrow" src="./images/arrow.png" />';
    moreInfo.classList.add('moreInfo', 'innerText');

    const circle = document.createElement('div');
    circle.className = 'cirle';

    const hover = document.createElement('div');
    hover.innerHTML = `<p><span class='text_color'>Name:</span> ${student.name} </p><p><span class='text_color'> Alternate names:</span> ${student.alternate_names} </p><p><span class='text_color'>Species:</span> <span class='capitalize'>${student.species}</span></p> <p><span class='text_color'>Gend:</span> <span class='capitalize'>${student.gender}</span></p> <p><span class='text_color'>House:</span> ${student.house}</p> <p><span class='text_color'>Date of birth:</span> ${student.dateOfBirth}</p> <p><span class='text_color'>Year of birth:</span> ${student.yearOfBirth}</p> <p><span class='text_color'>Wizard:</span> <span class='capitalize'>${student.wizard}</span></p> <p><span class='text_color'>Ancestry:</span> <span class='capitalize'>${student.ancestry}</span></p> <p><span class='text_color'>Eye colour:</span> <span class='capitalize'>${student.eyeColour}</span></p> <p><span class='text_color'>Hair colour:</span> <span class='capitalize'>${student.hairColour}</span></p> <p><span class='text_color'>Wand:</span> Wood: ${student.wand.wood}, core: ${student.wand.core}, length: ${student.wand.length}</p> <p><span class='text_color'>Patronus:</span> <span class='capitalize'>${student.patronus}</span></p> <p><span class='text_color'>Hogwarts student:</span> <span class='capitalize'>${student.hogwartsStudent}</span></p> <p><span class='text_color'>Hogwarts staff:</span> <span class='capitalize'>${student.hogwartsStaff}</span></p> <p><span class='text_color'>Actor:</span> ${student.actor}</p> <p><span class='text_color'>Alive:</span> <span class='capitalize'>${student.alive}</span></p>`;
    hover.className = 'hover';

    allStudents.append(div);
    div.append(divInner);
    div.append(studentImg);
    divInner.append(studentName);
    divInner.append(alternateName);
    divInner.append(house);
    divInner.append(dateOfBirth);
    divInner.append(moreInfo);
    moreInfo.append(circle);
    moreInfo.append(hover);
  }
}

getStudents();

//staff section

async function getStaff() {
  let response = await fetch(
    'https://hp-api.onrender.com/api/characters/staff'
  );
  let staff = await response.json();

  let worker = await fetch(
    `https://hp-api.onrender.com/api/character/${staff.id}`
  );

  const allStaff = document.querySelector('#staff');
  let staffRes = await worker.json();

  for (let worker of staff) {
    const div = document.createElement('div');
    div.className = 'card';

    let workerImg = document.createElement('img');
    workerImg.setAttribute('src', `${worker.image}`);
    workerImg.setAttribute('alt', 'character_photo');
    workerImg.className = 'bgrImg';

    const divInner = document.createElement('div');
    divInner.className = 'cardText';

    const workerName = document.createElement('p');
    workerName.textContent = worker.name;
    workerName.classList.add('characterName', 'innerText');

    const staffAlternateName = document.createElement('p');
    staffAlternateName.textContent = worker.alternate_names[0];
    staffAlternateName.className = 'margin';

    const staffHouse = document.createElement('p');
    staffHouse.textContent = worker.house;
    staffHouse.className = 'margin';

    const dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = worker.dateOfBirth;

    const moreInfo = document.createElement('div');
    moreInfo.innerHTML =
      'Більше інформації <img class="arrow" src="./images/arrow.png" />';
    moreInfo.classList.add('moreInfo', 'innerText');

    const circle = document.createElement('div');
    circle.className = 'cirle';

    const hover = document.createElement('div');
    hover.innerHTML = `<p><span class='text_color'>Name:</span> ${worker.name} </p><p><span class='text_color'> Alternate names:</span> ${worker.alternate_names} </p><p><span class='text_color'>Species:</span> <span class='capitalize'>${worker.species}</span></p> <p><span class='text_color'>Gend:</span> <span class='capitalize'>${worker.gender}</span></p> <p><span class='text_color'>House:</span> ${worker.house}</p> <p><span class='text_color'>Date of birth:</span> ${worker.dateOfBirth}</p> <p><span class='text_color'>Year of birth:</span> ${worker.yearOfBirth}</p> <p><span class='text_color'>Wizard:</span> <span class='capitalize'>${worker.wizard}</span></p> <p><span class='text_color'>Ancestry:</span> <span class='capitalize'>${worker.ancestry}</span></p> <p><span class='text_color'>Eye colour:</span> <span class='capitalize'>${worker.eyeColour}</span></p> <p><span class='text_color'>Hair colour:</span> <span class='capitalize'>${worker.hairColour}</span></p> <p><span class='text_color'>Wand:</span> Wood: ${worker.wand.wood}, core: ${worker.wand.core}, length: ${worker.wand.length}</p> <p><span class='text_color'>Patronus:</span> <span class='capitalize'>${worker.patronus}</span></p> <p><span class='text_color'>Hogwarts student:</span> <span class='capitalize'>${worker.hogwartsStudent}</span></p> <p><span class='text_color'>Hogwarts staff:</span> <span class='capitalize'>${worker.hogwartsStaff}</span></p> <p><span class='text_color'>Actor:</span> ${worker.actor}</p> <p><span class='text_color'>Alive:</span> <span class='capitalize'>${worker.alive}</span></p>`;
    hover.className = 'hover';

    allStaff.append(div);
    div.append(divInner);
    div.append(workerImg);
    divInner.append(workerName);
    divInner.append(staffAlternateName);
    divInner.append(staffHouse);
    divInner.append(dateOfBirth);
    divInner.append(moreInfo);
    moreInfo.append(circle);
    moreInfo.append(hover);
  }
}

getStaff();

//show only one house

function showOneHouse(id) {
  document.querySelectorAll('.not-showed').forEach(function (el) {
    el.style = 'display: none;';
  });

  document.querySelector(".not-showed[id='" + id + "']").style =
    'display: block;';
}

//houses section

async function showGryffindorHouse() {
  let response = await fetch(
    'https://hp-api.onrender.com/api/characters/house/gryffindor'
  );
  let houseStudents = await response.json();

  let houseStudent = await fetch(
    `https://hp-api.onrender.com/api/character/${houseStudents.id}`
  );

  const allHouseStudents = document.querySelector('.gryffindor');
  let studentRes = await houseStudent.json();

  for (let houseStudent of houseStudents) {
    const div = document.createElement('div');
    div.className = 'card';

    let studentImg = document.createElement('img');
    studentImg.setAttribute('src', `${houseStudent.image}`);
    studentImg.setAttribute('alt', 'character_photo');
    studentImg.className = 'bgrImg';

    const divInner = document.createElement('div');
    divInner.className = 'cardText';
    const studentName = document.createElement('p');
    studentName.textContent = houseStudent.name;
    studentName.classList.add('characterName', 'innerText');

    const alternateName = document.createElement('p');
    alternateName.textContent = houseStudent.alternate_names[0];
    alternateName.className = 'margin';

    const house = document.createElement('p');
    house.textContent = houseStudent.house;
    house.className = 'margin';

    const dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = houseStudent.dateOfBirth;

    const moreInfo = document.createElement('div');
    moreInfo.innerHTML =
      'Більше інформації <img class="arrow" src="./images/arrow.png" />';
    moreInfo.classList.add('moreInfo', 'innerText');

    const circle = document.createElement('div');
    circle.className = 'cirle';

    const hover = document.createElement('div');
    hover.innerHTML = `<p><span class='text_color'>Name:</span> ${houseStudent.name} </p><p><span class='text_color'> Alternate names:</span> ${houseStudent.alternate_names} </p><p><span class='text_color'>Species:</span> <span class='capitalize'>${houseStudent.species}</span></p> <p><span class='text_color'>Gend:</span> <span class='capitalize'>${houseStudent.gender}</span></p> <p><span class='text_color'>House:</span> ${houseStudent.house}</p> <p><span class='text_color'>Date of birth:</span> ${houseStudent.dateOfBirth}</p> <p><span class='text_color'>Year of birth:</span> ${houseStudent.yearOfBirth}</p> <p><span class='text_color'>Wizard:</span> <span class='capitalize'>${houseStudent.wizard}</span></p> <p><span class='text_color'>Ancestry:</span> <span class='capitalize'>${houseStudent.ancestry}</span></p> <p><span class='text_color'>Eye colour:</span> <span class='capitalize'>${houseStudent.eyeColour}</span></p> <p><span class='text_color'>Hair colour:</span> <span class='capitalize'>${houseStudent.hairColour}</span></p> <p><span class='text_color'>Wand:</span> Wood: ${houseStudent.wand.wood}, core: ${houseStudent.wand.core}, length: ${houseStudent.wand.length}</p> <p><span class='text_color'>Patronus:</span> <span class='capitalize'>${houseStudent.patronus}</span></p> <p><span class='text_color'>Hogwarts student:</span> <span class='capitalize'>${houseStudent.hogwartsStudent}</span></p> <p><span class='text_color'>Hogwarts staff:</span> <span class='capitalize'>${houseStudent.hogwartsStaff}</span></p> <p><span class='text_color'>Actor:</span> ${houseStudent.actor}</p> <p><span class='text_color'>Alive:</span> <span class='capitalize'>${houseStudent.alive}</span></p>`;
    hover.className = 'hover';

    allHouseStudents.append(div);
    div.append(divInner);
    div.append(studentImg);
    divInner.append(studentName);
    divInner.append(alternateName);
    divInner.append(house);
    divInner.append(dateOfBirth);
    divInner.append(moreInfo);
    moreInfo.append(circle);
    moreInfo.append(hover);
  }
}

showGryffindorHouse();

async function showSlytherinHouse() {
  let response = await fetch(
    'https://hp-api.onrender.com/api/characters/house/slytherin'
  );
  let houseStudents = await response.json();

  let houseStudent = await fetch(
    `https://hp-api.onrender.com/api/character/${houseStudents.id}`
  );

  const allHouseStudents = document.querySelector('.slytherin');
  let studentRes = await houseStudent.json();

  for (let houseStudent of houseStudents) {
    const div = document.createElement('div');
    div.className = 'card';

    let studentImg = document.createElement('img');
    studentImg.setAttribute('src', `${houseStudent.image}`);
    studentImg.setAttribute('alt', 'character_photo');
    studentImg.className = 'bgrImg';

    const divInner = document.createElement('div');
    divInner.className = 'cardText';
    const studentName = document.createElement('p');
    studentName.textContent = houseStudent.name;
    studentName.classList.add('characterName', 'innerText');

    const alternateName = document.createElement('p');
    alternateName.textContent = houseStudent.alternate_names[0];
    alternateName.className = 'margin';

    const house = document.createElement('p');
    house.textContent = houseStudent.house;
    house.className = 'margin';

    const dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = houseStudent.dateOfBirth;

    const moreInfo = document.createElement('div');
    moreInfo.innerHTML =
      'Більше інформації <img class="arrow" src="./images/arrow.png" />';
    moreInfo.classList.add('moreInfo', 'innerText');

    const circle = document.createElement('div');
    circle.className = 'cirle';

    const hover = document.createElement('div');
    hover.innerHTML = `<p><span class='text_color'>Name:</span> ${houseStudent.name} </p><p><span class='text_color'> Alternate names:</span> ${houseStudent.alternate_names} </p><p><span class='text_color'>Species:</span> <span class='capitalize'>${houseStudent.species}</span></p> <p><span class='text_color'>Gend:</span> <span class='capitalize'>${houseStudent.gender}</span></p> <p><span class='text_color'>House:</span> ${houseStudent.house}</p> <p><span class='text_color'>Date of birth:</span> ${houseStudent.dateOfBirth}</p> <p><span class='text_color'>Year of birth:</span> ${houseStudent.yearOfBirth}</p> <p><span class='text_color'>Wizard:</span> <span class='capitalize'>${houseStudent.wizard}</span></p> <p><span class='text_color'>Ancestry:</span> <span class='capitalize'>${houseStudent.ancestry}</span></p> <p><span class='text_color'>Eye colour:</span> <span class='capitalize'>${houseStudent.eyeColour}</span></p> <p><span class='text_color'>Hair colour:</span> <span class='capitalize'>${houseStudent.hairColour}</span></p> <p><span class='text_color'>Wand:</span> Wood: ${houseStudent.wand.wood}, core: ${houseStudent.wand.core}, length: ${houseStudent.wand.length}</p> <p><span class='text_color'>Patronus:</span> <span class='capitalize'>${houseStudent.patronus}</span></p> <p><span class='text_color'>Hogwarts student:</span> <span class='capitalize'>${houseStudent.hogwartsStudent}</span></p> <p><span class='text_color'>Hogwarts staff:</span> <span class='capitalize'>${houseStudent.hogwartsStaff}</span></p> <p><span class='text_color'>Actor:</span> ${houseStudent.actor}</p> <p><span class='text_color'>Alive:</span> <span class='capitalize'>${houseStudent.alive}</span></p>`;
    hover.className = 'hover';

    allHouseStudents.append(div);
    div.append(divInner);
    div.append(studentImg);
    divInner.append(studentName);
    divInner.append(alternateName);
    divInner.append(house);
    divInner.append(dateOfBirth);
    divInner.append(moreInfo);
    moreInfo.append(circle);
    moreInfo.append(hover);
  }
}

showSlytherinHouse();

async function showRavenclawHouse() {
  let response = await fetch(
    'https://hp-api.onrender.com/api/characters/house/ravenclaw'
  );
  let houseStudents = await response.json();

  let houseStudent = await fetch(
    `https://hp-api.onrender.com/api/character/${houseStudents.id}`
  );

  const allHouseStudents = document.querySelector('.ravenclaw');
  let studentRes = await houseStudent.json();

  for (let houseStudent of houseStudents) {
    const div = document.createElement('div');
    div.className = 'card';

    let studentImg = document.createElement('img');
    studentImg.setAttribute('src', `${houseStudent.image}`);
    studentImg.setAttribute('alt', 'character_photo');
    studentImg.className = 'bgrImg';

    const divInner = document.createElement('div');
    divInner.className = 'cardText';
    const studentName = document.createElement('p');
    studentName.textContent = houseStudent.name;
    studentName.classList.add('characterName', 'innerText');

    const alternateName = document.createElement('p');
    alternateName.textContent = houseStudent.alternate_names[0];
    alternateName.className = 'margin';

    const house = document.createElement('p');
    house.textContent = houseStudent.house;
    house.className = 'margin';

    const dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = houseStudent.dateOfBirth;

    const moreInfo = document.createElement('div');
    moreInfo.innerHTML =
      'Більше інформації <img class="arrow" src="./images/arrow.png" />';
    moreInfo.classList.add('moreInfo', 'innerText');

    const circle = document.createElement('div');
    circle.className = 'cirle';

    const hover = document.createElement('div');
    hover.innerHTML = `<p><span class='text_color'>Name:</span> ${houseStudent.name} </p><p><span class='text_color'> Alternate names:</span> ${houseStudent.alternate_names} </p><p><span class='text_color'>Species:</span> <span class='capitalize'>${houseStudent.species}</span></p> <p><span class='text_color'>Gend:</span> <span class='capitalize'>${houseStudent.gender}</span></p> <p><span class='text_color'>House:</span> ${houseStudent.house}</p> <p><span class='text_color'>Date of birth:</span> ${houseStudent.dateOfBirth}</p> <p><span class='text_color'>Year of birth:</span> ${houseStudent.yearOfBirth}</p> <p><span class='text_color'>Wizard:</span> <span class='capitalize'>${houseStudent.wizard}</span></p> <p><span class='text_color'>Ancestry:</span> <span class='capitalize'>${houseStudent.ancestry}</span></p> <p><span class='text_color'>Eye colour:</span> <span class='capitalize'>${houseStudent.eyeColour}</span></p> <p><span class='text_color'>Hair colour:</span> <span class='capitalize'>${houseStudent.hairColour}</span></p> <p><span class='text_color'>Wand:</span> Wood: ${houseStudent.wand.wood}, core: ${houseStudent.wand.core}, length: ${houseStudent.wand.length}</p> <p><span class='text_color'>Patronus:</span> <span class='capitalize'>${houseStudent.patronus}</span></p> <p><span class='text_color'>Hogwarts student:</span> <span class='capitalize'>${houseStudent.hogwartsStudent}</span></p> <p><span class='text_color'>Hogwarts staff:</span> <span class='capitalize'>${houseStudent.hogwartsStaff}</span></p> <p><span class='text_color'>Actor:</span> ${houseStudent.actor}</p> <p><span class='text_color'>Alive:</span> <span class='capitalize'>${houseStudent.alive}</span></p>`;
    hover.className = 'hover';

    allHouseStudents.append(div);
    div.append(divInner);
    div.append(studentImg);
    divInner.append(studentName);
    divInner.append(alternateName);
    divInner.append(house);
    divInner.append(dateOfBirth);
    divInner.append(moreInfo);
    moreInfo.append(circle);
    moreInfo.append(hover);
  }
}

showRavenclawHouse();

async function showHufflepuffHouse() {
  let response = await fetch(
    'https://hp-api.onrender.com/api/characters/house/hufflepuff'
  );
  let houseStudents = await response.json();

  let houseStudent = await fetch(
    `https://hp-api.onrender.com/api/character/${houseStudents.id}`
  );

  const allHouseStudents = document.querySelector('.hufflepuff');
  let studentRes = await houseStudent.json();

  for (let houseStudent of houseStudents) {
    const div = document.createElement('div');
    div.className = 'card';

    let studentImg = document.createElement('img');
    studentImg.setAttribute('src', `${houseStudent.image}`);
    studentImg.setAttribute('alt', 'character_photo');
    studentImg.className = 'bgrImg';

    const divInner = document.createElement('div');
    divInner.className = 'cardText';
    const studentName = document.createElement('p');
    studentName.textContent = houseStudent.name;
    studentName.classList.add('characterName', 'innerText');

    const alternateName = document.createElement('p');
    alternateName.textContent = houseStudent.alternate_names[0];
    alternateName.className = 'margin';

    const house = document.createElement('p');
    house.textContent = houseStudent.house;
    house.className = 'margin';

    const dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = houseStudent.dateOfBirth;

    const moreInfo = document.createElement('div');
    moreInfo.innerHTML =
      'Більше інформації <img class="arrow" src="./images/arrow.png" />';
    moreInfo.classList.add('moreInfo', 'innerText');

    const circle = document.createElement('div');
    circle.className = 'cirle';

    const hover = document.createElement('div');
    hover.innerHTML = `<p><span class='text_color'>Name:</span> ${houseStudent.name} </p><p><span class='text_color'> Alternate names:</span> ${houseStudent.alternate_names} </p><p><span class='text_color'>Species:</span> <span class='capitalize'>${houseStudent.species}</span></p> <p><span class='text_color'>Gend:</span> <span class='capitalize'>${houseStudent.gender}</span></p> <p><span class='text_color'>House:</span> ${houseStudent.house}</p> <p><span class='text_color'>Date of birth:</span> ${houseStudent.dateOfBirth}</p> <p><span class='text_color'>Year of birth:</span> ${houseStudent.yearOfBirth}</p> <p><span class='text_color'>Wizard:</span> <span class='capitalize'>${houseStudent.wizard}</span></p> <p><span class='text_color'>Ancestry:</span> <span class='capitalize'>${houseStudent.ancestry}</span></p> <p><span class='text_color'>Eye colour:</span> <span class='capitalize'>${houseStudent.eyeColour}</span></p> <p><span class='text_color'>Hair colour:</span> <span class='capitalize'>${houseStudent.hairColour}</span></p> <p><span class='text_color'>Wand:</span> Wood: ${houseStudent.wand.wood}, core: ${houseStudent.wand.core}, length: ${houseStudent.wand.length}</p> <p><span class='text_color'>Patronus:</span> <span class='capitalize'>${houseStudent.patronus}</span></p> <p><span class='text_color'>Hogwarts student:</span> <span class='capitalize'>${houseStudent.hogwartsStudent}</span></p> <p><span class='text_color'>Hogwarts staff:</span> <span class='capitalize'>${houseStudent.hogwartsStaff}</span></p> <p><span class='text_color'>Actor:</span> ${houseStudent.actor}</p> <p><span class='text_color'>Alive:</span> <span class='capitalize'>${houseStudent.alive}</span></p>`;
    hover.className = 'hover';

    allHouseStudents.append(div);
    div.append(divInner);
    div.append(studentImg);
    divInner.append(studentName);
    divInner.append(alternateName);
    divInner.append(house);
    divInner.append(dateOfBirth);
    divInner.append(moreInfo);
    moreInfo.append(circle);
    moreInfo.append(hover);
  }
}

showHufflepuffHouse();
