import { useCallback } from 'react';
import { css } from '@linaria/core';

import Title from '@/components/Title';
import { useTimeline } from '@/hooks';
import * as gsapSetting from '@/utils/gsapSetting';
import Background from './Background';
import List from './List';

export default function Section({ section, index }) {
	const Tag = section.tag || 'section';

	const trigger = `.${sectionStyle}`;

	const [ref] = useTimeline({
		trigger,
		markers: false,
		scrub: true,
		pin: true
	});

	return (
		<Tag ref={ref}>
			<div className={[sectionStyle, `section-${index}`].join(' ')}>
				{section.title && (
					<TitleContainer section={section} index={index} />
				)}
				{section.subtitle && (
					<TitleContainer
						section={section}
						isSubtitle={true}
						index={index}
					/>
				)}
				{Array.isArray(section.list) && (
					<List section={section} index={index} />
				)}
				{Array.isArray(section.bg) && (
					<Background section={section} index={index} />
				)}
			</div>
		</Tag>
	);
}

const TitleContainer = ({ section, isSubtitle, index }) => {
	const key = isSubtitle ? 'subtitle' : 'title';
	const props = section[key] instanceof Object ? section[key] : '';
	const animateKey = props?.['data-animate'];

	const className = isSubtitle ? 'gsap-subtitle ' : 'gsap-title ';
	const trigger = `.gsap-${key}`;

	const exec = useCallback(
		(tl) => {
			if (index === 0) {
				tl.to(trigger, {
					duration: 3,
					autoAlpha: 1
				});
			} else {
				tl.fromTo(
					trigger,
					{
						autoAlpha: 0
					},
					animateKey
						? gsapSetting[animateKey]
						: {
								duration: 3,
								autoAlpha: 1
						}
				);
			}
			tl.to(trigger, {
				autoAlpha: 0
			});
		},
		[trigger, index, animateKey]
	);
	const [ref] = useTimeline(
		{
			trigger,
			start: 'top 20%',
			end: 'top -80%',
			markers: false,
			scrub: true
		},
		exec
	);

	return (
		<div ref={ref} style={{ maxWidth: '100vw', overflow: 'hidden' }}>
			<Title {...props} className={className + (props?.className || '')}>
				{section[key]?.text || section[key]}
			</Title>
		</div>
	);
};

const sectionStyle = css`
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding-top: 6vh;

	> div {
		display: flex;
		justify-content: center;
	}

	.gsap-subtitle {
		color: var(--secondary-dark-color);
		text-align: center;
		white-space: pre;
	}
`;
