import { useEffect, useState } from 'react';
import { css } from '@linaria/core';
import readyFramePng from '@images/sections/section0/ready_frame.png';
import squiggly from '@/components/animations/SquigglyAnim';

export default function ReadyGo() {
	const [scrolled, setScrolled] = useState(false);
    const animationPlayState = scrolled ? 'running' : 'paused';

	useEffect(() => {
		const scrollStart = () => setScrolled(true);

		if (!scrolled) window.addEventListener('scroll', scrollStart);

		return () => {
			if (!scrolled) window.removeEventListener('scroll', scrollStart);
		}
	}, [scrolled]);

	return (
		<div className={readyFrameStyle} style={{ animationPlayState }}>
			<img
				className={squiggly}
				src={readyFramePng}
				alt="Are you ready?"
			/>
		</div>
	);
}

const readyFrameStyle = css`
	--width: 275px;

	width: var(--width);
	position: fixed;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: -1;
	animation: readyGo 2s forwards linear;

	img {
		position: relative;
		width: 100%;
	}

	--red-l: var(--red);
	--orange-l: var(--orange);
	--green-l: var(--green);
	--content: 'READY?';

	&::before {
		--r: calc(var(--width) / 5 - 3px);

		content: '';
		position: absolute;
		top: 50%;
		left: 30px;
		width: var(--r);
		height: var(--r);
		border-radius: 50%;
		background-color: var(--red-l);
		box-shadow: calc((var(--r) + 14px) * 1) 0 var(--orange-l),
			calc((var(--r) + 14px) * 2) 0 var(--green-l);
		transform: translateY(-50%);
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

	@keyframes readyGo {
		33% {
			--red-l: var(--red);
			--orange-l: transparent;
			--green-l: transparent;
			--content: '';
		}
		66% {
			--red-l: transparent;
			--orange-l: var(--orange);
			--green-l: transparent;
			--content: '';
		}
		100% {
			--red-l: transparent;
			--orange-l: transparent;
			--content: 'GO!!';
		}
	}
`;
