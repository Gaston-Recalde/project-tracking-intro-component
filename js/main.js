const open = document.querySelector('.nav__open');
const close = document.querySelector('.nav__close');
const navbar = document.querySelector('.nav');

open.addEventListener('click', () => {
    open.classList.add('nav__open--active');
    close.classList.add('nav__close--active');
    navbar.classList.add('nav--active');
});

close.addEventListener('click', () => {
    open.classList.remove('nav__open--active');
    close.classList.remove('nav__close--active');
    navbar.classList.remove('nav--active');
});