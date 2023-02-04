const hamburger = document.querySelector('.header__burger-menu');
const menu = document.querySelector('.header__menu');
const menuLink = document.querySelectorAll('.header__menu li a');

hamburger.addEventListener('click', e => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    e.stopPropagation();
});

menuLink.forEach(e => {
    e.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});

document.addEventListener('click', e => {
    if (e.target.closest('.header__menu')) return;

    menu.classList.add('active');
    hamburger.classList.remove('active');
});
