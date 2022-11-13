import { useCallback } from 'react';
import { css } from '@linaria/core';
import Img from '@/components/Img';
import finishPng from '@images/sections/section8/end.png';
import leftLinePng from '@images/sections/section8/line_l.png';
import rightLinePng from '@images/sections/section8/line_r.png';
import { useTimeline } from '@/hooks';

export default function Finish() {
	const trigger = '.gsap-finish';
	const exec = useCallback(
		(tl) =>
			tl
				.from(trigger, {
					autoAlpha: 0
				})
				.to(trigger, {
					autoAlpha: 0
				})
				.to(
					`.${lineStyle}:first-child`,
					{
						rotate: -15,
						xPercent: -50
					},
					'<'
				)
				.to(
					`.${lineStyle}:last-child`,
					{
						rotate: 15,
						xPercent: 50
					},
					'<'
				),
		[trigger]
	);

	const [ref] = useTimeline(
		{
			trigger,
			markers: false,
			start: 'bottom -1600%',
			end: 'bottom -1660%'
		},
		exec
	);
	return (
		<div ref={ref}>
			<div className="gsap-finish">
				<Img className={lineStyle} src={leftLinePng} alt="left line" />
				<Img className={finishStyle} src={finishPng} alt="finish" />
				<Img
					className={lineStyle}
					src={rightLinePng}
					alt="right line"
				/>
			</div>
		</div>
	);
}

const finishStyle = css`
	position: absolute;
	height: 105vh;
	bottom: -5vh;
	left: 50%;
	transform: translateX(-50%);
`;

const lineStyle = css`
	position: fixed;
	width: 52%;
	bottom: 16vh;
	object-fit: contain;

	&:first-child {
		transform-origin: left;
		left: 0;
	}
	&:last-child {
		transform-origin: right;
		right: 0;
	}
`;
