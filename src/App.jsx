import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import Layout from '@/layouts';
import Sections from '@/layouts/sections';
import Cursor from '@/layouts/layout/Cursor';
import { ReactComponent as SquigglySvg } from '@images/filters/squiggly.svg';

import './assets/styles/index.scss';

gsap.registerPlugin(
	ScrollTrigger,
	TextPlugin,
	CSSPlugin,
	CSSRulePlugin,
	MotionPathPlugin
);

export default function App() {
	const sectionsRef = useRef();
	const layoutRef = useRef();

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '.scroll-bg',
					markers: import.meta.env.DEV,
					start: 'bottom 60%',
					end: 'bottom 10%',
					scrub: true
				}
			});
			tl.to('.scroll-bg.left', {
				scale: 0.2,
				opacity: 0,
				motionPath: {
					path: 'M 0 0 C 120 -40 140 -40 200 100',
					alignOrigin: [0.5, 0.5]
				}
			}).to(
				'.scroll-bg.right',
				{
					scale: 0.2,
					opacity: 0,
					motionPath: {
						path: 'M 0 0 C -120 -40 -140 -40 -200 100',
						alignOrigin: [0.5, 0.5]
					}
				},
				'<'
			);
			// gsap.utils.toArray('section').forEach(function (ele) {
			// 	ScrollTrigger.create({
			// 		trigger: ele,
			// 		start: 'top 50%',
			// 		end: 'bottom 50%',
			// 		scrub: true,
			// 		markers: true
			// 	});
			// });
		}, sectionsRef);

		return () => ctx.revert();
	}, []);

	return (
		<>
			<Layout ref={layoutRef}>
				<Sections ref={sectionsRef} />
			</Layout>
			<SquigglySvg />
			{/* <Cursor /> */}
		</>
	);
}
