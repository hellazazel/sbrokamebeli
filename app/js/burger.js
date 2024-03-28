let burgerList = document.querySelector('.header__burger-list');
let toggle = document.querySelector('.header__toggle');


toggle.addEventListener('click', () => {
  burgerList.classList.toggle('header__burger-list--opened');
  burgerList.classList.toggle('header__burger-list--closed');
  toggle.classList.toggle('header__toggle--opened');
  toggle.classList.toggle('header__toggle--closed');
});

function closeBurgerMenu() {
    burgerList.classList.remove('header__burger-list--opened');
    burgerList.classList.add('header__burger-list--closed');
    toggle.classList.add('header__toggle--closed');
    toggle.classList.remove('header__toggle--opened');
  }

  function handleResize() {
    if (window.innerWidth <= 1440) {
      closeBurgerMenu();
    }
  }
  
  window.addEventListener('resize', handleResize);