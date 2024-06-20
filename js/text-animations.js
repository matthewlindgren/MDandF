gsap.registerPlugin(ScrollTrigger);

// GSAP split text animation
const splitTypes = document.querySelectorAll(".split-text");
splitTypes.forEach((word, i) => {
	const text = new SplitType(word, { types: "words" });

	gsap.from(text.words, {
		scrollTrigger: {
			trigger: word,
			start: "top 80%",
			end: "top 20%",
			scrub: true,
			markers: false,
		},
		opacity: 0.2,
		stagger: 0.1,
  });
});

// GSAP fade in, enlarge, move up animation
gsap.fromTo('.introduce', 
	{
		opacity: 0,
		scale: 0.8,
		y: "6vh"
	},
	{
		opacity: 1,
		scale: 1,
		y: 0,
		duration: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: '.introduce',
			start: "top 80%",
			toggleActions: 'play none none none'
		}
	}
);


// from Lenis GitHub documentation
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


document.addEventListener("DOMContentLoaded", function () {
	const h1 = document.querySelector('h1');
	const titleBlock = document.querySelector('.title-block');
	
	// Get the bounding box of the h1 rectangle
	const h1Rect = h1.getBoundingClientRect();
	
	// Calculate the positions and width
	const h1Left = h1Rect.left;
	const h1Top = h1Rect.top;
	const h1Height = h1Rect.bottom - h1Rect.top;
	const h1Width = h1Rect.width;
	const h1Right = window.innerWidth - h1Left - h1Width;

	const style = document.createElement("style");
	document.head.appendChild(style);
	
	const keyframes = `
			@keyframes titleBlock {
					0% {
							width: 0;
							left: ${h1Left + 5}px;
							right: auto;
					}
					35% {
						left: ${h1Left + 5}px;
						width: ${h1Width + 10}px;
						right: ${h1Right - 15}px;
					}
					65% {
						width: ${h1Width + 10}px;
						right: ${h1Right - 15}px;
					}
					100% {
							width: 0;
							left: auto;
							right: ${h1Right - 15}px;
					}
			}
	`;

	titleBlock.style.height = `${h1Height * 0.98}px`;
	titleBlock.style.top = `${h1Top - 0.01 * window.innerHeight}px`;
	
	// Inject keyframes into the style element
	style.sheet.insertRule(keyframes, style.sheet.cssRules.length);
});
