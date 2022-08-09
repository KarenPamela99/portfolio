const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav__menu');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
