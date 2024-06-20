document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.menu');
    const header = document.querySelector('header');

    const menuRect = menu.getBoundingClientRect();

    const menuHeight = menu.offsetHeight;
    const menuTop = menuRect.top;

    header.style.height = `${menuHeight + menuTop + 0.01 * window.innerWidth}px`;
});
