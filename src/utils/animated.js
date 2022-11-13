import { gsap } from 'gsap';

export function show(element) {
	gsap.fromTo(
		element,
		{ autoAlpha: 0 },
		{
			duration: 1,
			delay: 0.2,
			autoAlpha: 1,
			// force3D: false,
			ease: 'expo',
			overwrite: 'auto'
		}
	);
}

export function hide(element) {
	gsap.to(element, {
		duration: 1,
		delay: 0.2,
		autoAlpha: 0,
		ease: 'expo',
		overwrite: 'auto'
	});
}

export function scrollIn(element) {
	gsap.fromTo(
		element,
		{ autoAlpha: 0, yPercent: -100 },
		{
			duration: 1,
			delay: 0.2,
			autoAlpha: 1,
			// force3D: false,
			ease: 'none',
			yPercent: 100
		}
	);
}
export function scrollOut(element) {
	gsap.fromTo(
		element,
		{
			duration: 1,
			delay: 0.2,
			autoAlpha: 1,
			// force3D: false,
			ease: 'none',
			yPercent: -100
		},
		{ autoAlpha: 0, yPercent: 100 }
	);
}
