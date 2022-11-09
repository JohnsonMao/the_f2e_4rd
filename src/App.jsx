import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import { useGsapTimeline } from '@/hooks';
import Layout from '@/layouts';
import Sections from '@/layouts/sections';
import Cursor from '@/layouts/layout/Cursor';
import { ReactComponent as SquigglySvg } from '@images/filters/squiggly.svg';
import { show, hide } from '@/utils';

import './assets/styles/index.scss';

gsap.registerPlugin(
	ScrollTrigger,
	TextPlugin,
	CSSPlugin,
	CSSRulePlugin,
	MotionPathPlugin
);

export const SectionTimeline = React.createContext(null);

export default function App() {
	const [ref, tl] = useGsapTimeline('[data-type="section"]');

	useLayoutEffect(() => {
		if (tl) {
			tl.to('.gsap-bg.left', {
				scale: 0.2,
				autoAlpha: 0,
				ease: 'none',
				zIndex: -20,
				force3D: false,
				xPercent: 100
				// motionPath: {
				// 	path: 'M 0 0 C 120 -40 140 -40 350 100',
				// 	alignOrigin: [0.5, 0.5]
				// }
			}).to(
				'.gsap-bg.right',
				{
					scale: 0.2,
					autoAlpha: 0,
					ease: 'none',
					zIndex: -20,
					force3D: false,
					xPercent: -100
					// motionPath: {
					// 	path: 'M 0 0 C -120 -40 -140 -40 -350 100',
					// 	alignOrigin: [0.5, 0.5]
					// }
				},
				'<'
			);
		}
		const scrollListener = [];
		gsap.utils.toArray('.gsap-text').forEach(function (element) {
			scrollListener.push(ScrollTrigger.create({
				trigger: element,
				start: 'top 50%',
				end: 'bottom 0%',
				scrub: true,
				onEnter: function () {
					show(element);
				},
				onLeave: function () {
					hide(element);
				}, 
				onEnterBack: function () {
					show(element);
				},
				onLeaveBack: function () {
					hide(element);
				}
			}));
		});

		gsap.utils.toArray('.gsap-title').forEach(function (element) {
			scrollListener.push(ScrollTrigger.create({
				trigger: element,
				start: 'top 100%',
				end: 'bottom 0%',
				scrub: true,
				onEnter: function () {
					show(element);
				},
				onLeave: function () {
					hide(element);
				}, 
				onEnterBack: function () {
					show(element);
				},
				onLeaveBack: function () {
					hide(element);
				}
			}));
		});
		gsap.utils.toArray('.gsap-start').forEach(function (element) {
			scrollListener.push(ScrollTrigger.create({
				trigger: element,
				start: 'top 100%',
				end: 'bottom 0%',
				scrub: true,
				onEnter: function () {
					show(element);
				},
				onLeave: function () {
					hide(element);
				}, 
				onEnterBack: function () {
					show(element);
				},
				onLeaveBack: function () {
					hide(element);
				}
			}));
		});
		return () => scrollListener.forEach(l => l.revert());
	}, [tl]);

	// useLayoutEffect(() => {
	// 	const ctx = gsap.context(() => {
	// 		const tl = gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: '[data-type="section"]',
	// 				markers: import.meta.env.DEV,
	// 				start: 'bottom 90%',
	// 				end: 'bottom 5%',
	// 				scrub: true
	// 			}
	// 		});
	// 		tl.to('.gsap-bg.left', {
	// 			scale: 0.2,
	// 			autoAlpha: 0,
	// 			ease: 'none',
	// 			zIndex: -20,
	// 			force3D: false,
	// 			xPercent: 100
	// 			// motionPath: {
	// 			// 	path: 'M 0 0 C 120 -40 140 -40 350 100',
	// 			// 	alignOrigin: [0.5, 0.5]
	// 			// }
	// 		}).to(
	// 			'.gsap-bg.right',
	// 			{
	// 				scale: 0.2,
	// 				autoAlpha: 0,
	// 				ease: 'none',
	// 				zIndex: -20,
	// 				force3D: false,
	// 				xPercent: -100
	// 				// motionPath: {
	// 				// 	path: 'M 0 0 C -120 -40 -140 -40 -350 100',
	// 				// 	alignOrigin: [0.5, 0.5]
	// 				// }
	// 			},
	// 			'<'
	// 		);
	// 		// gsap.utils.toArray('section').forEach(function (ele) {
	// 		// 	ScrollTrigger.create({
	// 		// 		trigger: ele,
	// 		// 		start: 'top 50%',
	// 		// 		end: 'bottom 50%',
	// 		// 		scrub: true,
	// 		// 		markers: true
	// 		// 	});
	// 		// });
	// 	}, sectionsRef);

	// 	return () => ctx.revert();
	// }, []);

	return (
		<SectionTimeline.Provider value={tl}>
			<Layout ref={ref}>
				<Sections/>
			</Layout>
			<SquigglySvg />
			{/* <Cursor /> */}
		</SectionTimeline.Provider>
	);
}
