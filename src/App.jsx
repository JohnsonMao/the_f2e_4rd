import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import { useGsapTimeline } from '@/hooks';
import Layout from '@/layouts';
import Sections from '@/layouts/sections';
import Cursor from '@/layouts/layout/Cursor';
import { ReactComponent as SquigglySvg } from '@images/filters/squiggly.svg';
import { show, hide } from '@/utils';

gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);

export const LoadedContext = React.createContext([]);

export default function App() {
	const [ref, tl] = useGsapTimeline({
		trigger: '.section'
	});

	useLayoutEffect(() => {
		const scrollListener = [];
		gsap.utils.toArray('.gsap-text').forEach(function (element) {
			scrollListener.push(
				ScrollTrigger.create({
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
				})
			);
		});

		gsap.utils.toArray('.gsap-title').forEach(function (element) {
			scrollListener.push(
				ScrollTrigger.create({
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
				})
			);
		});
		gsap.utils.toArray('.gsap-start').forEach(function (element) {
			scrollListener.push(
				ScrollTrigger.create({
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
				})
			);
		});
		return () => scrollListener.forEach((l) => l.revert());
	}, [tl]);

	return (
		<LoadedContext.Provider value={[]}>
			<Layout ref={ref}>
				<Sections />
			</Layout>
			<SquigglySvg />
			{/* <Cursor /> */}
		</LoadedContext.Provider>
	);
}
