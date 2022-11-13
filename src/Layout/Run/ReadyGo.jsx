import { useCallback } from 'react';
import { css } from '@linaria/core';
import { SteppedEase } from 'gsap';
import readyFramePng from '@images/sections/section0/ready_frame.png';
import squiggly from '@styles/animations/SquigglyAnim';
import { useTimeline } from '@/hooks';
import Img from '@/components/Img';

export default function ReadyGo() {
	const trigger = '.gsap-ready';
	const exec = useCallback(
		(tl) =>
			tl
				.fromTo(
					trigger,
					{
						ease: SteppedEase.config(1),
						'--red': '#ff5136',
						'--orange': '#ff8100',
						'--green': '#7fbf62',
						'--content': '"READY?"'
					},
					{
						duration: 25,
						ease: SteppedEase.config(1),
						'--red': '#ff5136',
						'--orange': 'transparent',
						'--green': 'transparent',
						'--content': ''
					}
				)
				.to(trigger, {
					duration: 25,
					ease: SteppedEase.config(1),
					'--red': 'transparent',
					'--orange': '#ff8100',
					'--green': 'transparent',
					'--content': ''
				})
				.to(trigger, {
					duration: 25,
					ease: SteppedEase.config(1),
					'--red': 'transparent',
					'--orange': 'transparent',
					'--green': '#7fbf62',
					'--content': ''
				})
				.to(trigger, {
					ease: SteppedEase.config(1),
					'--red': 'transparent',
					'--orange': 'transparent',
					'--green': '#7fbf62',
					'--content': '"GO!!"'
				})
				.to(trigger, {
					duration: 25,
					'--red': 'transparent',
					'--orange': 'transparent',
					'--green': '#7fbf62',
					'--content': '"GO!!"',
					'--blur': '5px',
					scale: 0.4,
					autoAlpha: 0,
					ease: 'sine',
					force3D: false,
					xPercent: 30,
					yPercent: 40
				}),
		[trigger]
	);
	const [ref] = useTimeline(
		{
			trigger,
			markers: false,
			start: 'bottom 50%',
			end: 'bottom -80%'
		},
		exec
	);

	return (
		<div ref={ref}>
			<div className={[readyFrameStyle, 'gsap-ready'].join(' ')}>
				<Img
					className={squiggly}
					src={readyFramePng}
					alt="Are you ready?"
				/>
			</div>
		</div>
	);
}

const readyFrameStyle = css`
	--width: 20vw;

	width: var(--width);
	position: fixed;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;

	img {
		position: relative;
		width: 100%;
	}

	&::before {
		--r: calc(var(--width) / 5 - 0.5vw);

		content: '';
		position: absolute;
		top: 48%;
		left: 22%;
		width: var(--r);
		height: var(--r);
		border-radius: 50%;
		background-color: var(--red);
		box-shadow: 4.5vw 0 var(--orange), 9.2vw 0 var(--green);
		transform: translate(-50%, -50%);
	}

	&::after {
		content: var(--content);
		position: absolute;
		bottom: 100%;
		left: 50%;
		font-weight: bold;
		font-size: 32px;
		color: var(--heightlight-color);
		transform: translateX(calc(-50% - 15px));
	}
`;
