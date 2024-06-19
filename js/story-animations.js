const collapsibles = document.getElementsByClassName("member");
let i;

for (i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "flex") {
            content.style.display = "none";
        } else {
            content.style.display = "flex";
        }
        resizeSpacer();
    });
}


const teamContainer = document.querySelector('.team');
const spacer = document.querySelector('.team-spacer');
resizeSpacer();

window.addEventListener('resize', () => {
    resizeSpacer();
});

function resizeSpacer() {
    spacer.style.height = `${teamContainer.offsetHeight}px`;
}