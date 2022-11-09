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
	gsap.to(element, { duration: 1, delay: 0.2, autoAlpha: 0, ease: 'expo', overwrite: 'auto' });
}
