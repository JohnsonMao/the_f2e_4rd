import { css } from '@linaria/core';

import Background from './Background';
import List from './List';
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
	const getProps = (key) =>
		section[key] instanceof Object ? section[key] : '';
	const titleProps = getProps('title');
	const subtitleProps = getProps('subtitle');
	const SubtitleTag = subtitleProps.tag || 'div';

	return (
		<Tag className={sectionStyle}>
			<Title {...titleProps}>
				{section.title?.text || section.title}
			</Title>
			<SubtitleTag
				{...subtitleProps}
				className={'subtitle ' + subtitleProps.className}
			>
				{section.subtitle?.text || section.subtitle}
			</SubtitleTag>
			{Array.isArray(section.list) && <List section={section} />}
			{Array.isArray(section.bg) && <Background section={section} />}
		</Tag>
	);
}

const sectionStyle = css`
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;

	.subtitle {
		color: var(--secondary-dark-color);
		text-align: center;
		white-space: pre;
	}
`;
