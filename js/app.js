const elBarBtn = document.querySelector('.js-bar-btn');
const elCloseBtn = document.querySelector('.js-close-btn');
const elHeaderInner = document.querySelector('.js-header-inner');

elBarBtn.addEventListener('click', (evt) => {
  elHeaderInner.style.display = 'flex';
  setTimeout(() => {
    elHeaderInner.classList.toggle('move-nav'); 
  }, 10); 
});

elCloseBtn.addEventListener('click', (evt) => {
    elHeaderInner.classList.remove('move-nav');
});