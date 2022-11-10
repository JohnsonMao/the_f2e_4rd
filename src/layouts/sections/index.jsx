import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sectionsConfig from '@/assets/config/sections.json';
import Background from './Background';
import List from './List';
import Run from './Run';
import { show, hide } from '@/utils';

export default function Selections() {

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

		return () => scrollListener.forEach((l) => l.revert());
	}, []);

	return (
		<>
			<Run />
			{sectionsConfig.map((section, index) => {
				const TitleTag = section.title?.tag || 'div';

				return (
					<section
						className="section"
						style={{ height: '100vh' }}
						key={index}
					>
						<TitleTag className="gsap-title">
							{section.title?.text || section.title}
						</TitleTag>
						{Array.isArray(section.list) && (
							<List section={section} />
						)}
						<Background section={section} />
					</section>
				);
			})}
		</>
	);
}
