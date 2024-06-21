
document.addEventListener("DOMContentLoaded", () => {
	logoDiv = document.querySelector('.logo-container');
	header = document.querySelector('header');

	header.style.height = `${logoDiv.offsetHeight + 0.01 * window.innerHeight}px`;
});