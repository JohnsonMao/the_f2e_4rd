import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { styled } from '@linaria/react';

import sectionsConfig from '@/assets/config/sections';
import Background from './Background';
import List from './List';
import { show, hide } from '@/utils';
import Title from '@/components/Title';

export default function Section({ section }) {
	// useLayoutEffect(() => {
	// 	const scrollListener = [];
	// 	gsap.utils.toArray('.gsap-text').forEach(function (element) {
	// 		scrollListener.push(
	// 			ScrollTrigger.create({
	// 				trigger: element,
	// 				start: 'top 50%',
	// 				end: 'bottom 0%',
	// 				scrub: true,
	// 				onEnter: function () {
	// 					show(element);
	// 				},
	// 				onLeave: function () {
	// 					hide(element);
	// 				},
	// 				onEnterBack: function () {
	// 					show(element);
	// 				},
	// 				onLeaveBack: function () {
	// 					hide(element);
	// 				}
	// 			})
	// 		);
	// 	});

	// 	return () => scrollListener.forEach((l) => l.revert());
	// }, []);

	const Tag = section.tag || 'section';
	const titleProps = section.title instanceof Object ? section.title : '';

	return (
		<Tag style={{ position: 'relative' }}>
			<Title {...titleProps}>
				{section.title?.text || section.title}
			</Title>
			{Array.isArray(section.list) && <List section={section} />}
			{Array.isArray(section.bg) && <Background section={section} />}
		</Tag>
	);
}
