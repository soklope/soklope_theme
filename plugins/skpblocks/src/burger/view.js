document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.hamburger');
    const menu = document.querySelector('.burger-menu');

    if (burgerButton && menu) {
        burgerButton.addEventListener('click', function () {
            burgerButton.classList.toggle('is-active');
            menu.classList.toggle('is-open');
        });
    }
});
