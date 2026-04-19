const burgerToggle = document.querySelector('.ham-burger');
const offScreen = document.querySelector('.left-screen-menu');

function hamBurgerMenu() {
  if (burgerToggle.classList.toggle('active')) {
    offScreen.classList.toggle('active');
  } else {
    offScreen.classList.toggle('active');
  }
}

burgerToggle.addEventListener('click', function(){
  hamBurgerMenu()
})