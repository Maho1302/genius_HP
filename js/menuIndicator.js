const list = document.querySelectorAll('li');

function activeLi() {
  list.forEach(li => {
    li.classList.remove('active');
  });
  this.classList.add('active');
}

list.forEach(li => {
  li.addEventListener('click', activeLi);
});
