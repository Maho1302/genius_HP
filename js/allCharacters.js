const allCharacters = document.querySelector('.allCharacters');

const allCharactersBtnOpen = document.querySelector('.all-btn-open');

const toddleAllCharacters = () => allCharacters.classList.toggle('is-hidden');

allCharactersBtnOpen.addEventListener('click', toddleAllCharacters);
