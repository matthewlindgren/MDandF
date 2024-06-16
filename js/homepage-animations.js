let menuHidden = true;
document.querySelector('.burger-button').addEventListener('click', () => {
    let scrap = document.querySelector('.menu-scrap');
    let name = document.querySelector('h1');
    let burger = document.querySelector('.burger-button');
    if (menuHidden) {
        menuHidden = false;
        scrap.style.top = "0.5vh";
        scrap.style.transform = "rotate(0deg)";
        burger.style.transform = "rotate(90deg)";
        setTimeout(function() {
            name.style.color = "#F7F7F7";
            burger.src = "./assets/burger-menu-white.svg"
        }, 500);
    } else {
        menuHidden = true;
        scrap.style.top = "200vh";
        scrap.style.transform = "rotate(100deg)";
        burger.style.transform = "rotate(0deg)";
        setTimeout(function() {
            name.style.color = "#000000";
            burger.src = "./assets/burger-menu.svg"
        }, 100);
    }
});

document.querySelector('h1').addEventListener('click', () => {
    window.location.href = "./index.html";
});