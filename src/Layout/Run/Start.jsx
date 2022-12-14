import { useCallback } from 'react';
import { css } from '@linaria/core';
import Img from '@/components/Img';
import startPng from '@images/sections/section0/start.png';
import logoTextPng from '@images/layouts/common/logo_text.png';
import { useTimeline } from '@/hooks';

export default function Start() {
	const trigger = '.gsap-start';
	const exec = useCallback(
		(tl) =>
			tl.to(trigger, {
				autoAlpha: 0
			}),
		[trigger]
	);
	const [ref] = useTimeline(
		{
			trigger,
			markers: false,
			start: 'bottom -120%',
			end: 'bottom -140%'
		},
		exec
	);
	return (
		<div ref={ref}>
			<div className="gsap-start">
				<Img className={startStyle} src={startPng} alt="start" />
				<Img
					className={logoTextStyle}
					src={logoTextPng}
					alt="The F2E 4rd"
				/>
			</div>
		</div>
	);
}

const startStyle = css`
	position: absolute;
	height: 105vh;
	bottom: -5vh;
	left: 50%;
	transform: translateX(-50%);
`;

const logoTextStyle = css`
	position: absolute;
	height: 25vh;
	left: 50%;
	bottom: 72vh;
	transform: translateX(-50%);
	object-fit: contain;
`;
