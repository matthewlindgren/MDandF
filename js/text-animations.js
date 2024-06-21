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
