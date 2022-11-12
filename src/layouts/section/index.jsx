import { useCallback, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { css } from '@linaria/core';

import Background from './Background';
import List from './List';
import Title from '@/components/Title';
import { show, hide } from '@/utils';
import { useTimeline } from '@/hooks';

export default function Section({ section, index }) {
	const exec = useCallback((tl) => {
		if (index !== 0) {
			tl.from('.gsap-text', {
				autoAlpha: 0,
				force3D: false
			})
				.from(
					'.gsap-title',
					{
						autoAlpha: 0,
						force3D: false
					},
					'<'
				)
				.from(
					'.gsap-subtitle',
					{
						autoAlpha: 0,
						force3D: false
					},
					'<'
				)
				.from(
					'.gsap-bg',
					{
						autoAlpha: 0,
						force3D: false
					},
					'<'
				);
		}
		tl.to('.gsap-text', {
			autoAlpha: 0,
			force3D: false
		})
			.to(
				'.gsap-title',
				{
					autoAlpha: 0,
					force3D: false
				},
				'<'
			)
			.to(
				'.gsap-subtitle',
				{
					autoAlpha: 0,
					force3D: false
				},
				'<'
			)
			.to(
				'.gsap-bg',
				{
					autoAlpha: 0,
					force3D: false
				},
				'<'
			);
	}, [index]);
	const [ref] = useTimeline(
		{
			trigger: `.section-${index}`,
			start: 'top 6%',
			end: 'bottom 0%',
			markers: false,
			scrub: true,
			pin: true
		},
		exec
	);
	// useLayoutEffect(() => {
	// 	const scrollListener = [];
	// 	const gsapArray = [
	// 		...gsap.utils.toArray('.gsap-text'),
	// 		...gsap.utils.toArray('.gsap-title'),
	// 		gsap.utils.toArray('.gsap-bg')
	// 	];
	// 	gsapArray.forEach(function (element) {
	// 		scrollListener.push(
	// 			ScrollTrigger.create({
	// 				trigger: element,
	// 				end: 'bottom -100%',
	// 				scrub: true,
	// 				markers: true,
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
	const getProps = (key) =>
		section[key] instanceof Object ? section[key] : '';
	const titleProps = getProps('title');
	const subtitleProps = getProps('subtitle');
	const SubtitleTag = subtitleProps.tag || 'div';

	return (
		<div ref={ref}>
			<Tag className={[sectionStyle, `section-${index}`].join(' ')}>
				<Title {...titleProps}>
					{section.title?.text || section.title}
				</Title>
				<SubtitleTag
					{...subtitleProps}
					className={'gsap-subtitle ' + subtitleProps.className}
				>
					{section.subtitle?.text || section.subtitle}
				</SubtitleTag>
				{Array.isArray(section.list) && <List section={section} />}
				{Array.isArray(section.bg) && <Background section={section} />}
			</Tag>
		</div>
	);
}

const sectionStyle = css`
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;

	.gsap-subtitle {
		color: var(--secondary-dark-color);
		text-align: center;
		white-space: pre;
	}
`;
