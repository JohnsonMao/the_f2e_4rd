import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { styled } from '@linaria/react';
import { SteppedEase } from 'gsap';
import readyFramePng from '@images/sections/section0/ready_frame.png';
import squiggly from '@/components/animations/SquigglyAnim';
import { SectionTimeline } from '@/App';
import { useGsapTimeline } from '@/hooks';

export default function ReadyGo() {
	const [ref, tl] = useGsapTimeline('[data-type="ready"]', 'bottom 40%', 'bottom -10%');
	// const tl = useContext(SectionTimeline);
	const [scrolled, setScrolled] = useState(false);
	const animationPlayState = scrolled ? 'running' : 'paused';

	useEffect(() => {
		const scrollStart = () => setScrolled(true);

		if (!scrolled) window.addEventListener('scroll', scrollStart);

		return () => {
			if (!scrolled) window.removeEventListener('scroll', scrollStart);
		};
	}, [scrolled]);

	const ready = 'ready';

	useLayoutEffect(() => {
		const trigger = `[data-type="${ready}"]`;

		if (tl) {
			tl.from(trigger, {
				ease: SteppedEase.config(1),
				'--red': '#ff5136',
				'--orange': '#ff8100',
				'--green': '#7fbf62',
				'--content': '"READY?"'
			})
				.to(trigger, {
					duration: 10,
					ease: SteppedEase.config(1),
					'--red': '#ff5136',
					'--orange': 'transparent',
					'--green': 'transparent',
					'--content': ''
				})
				.to(trigger, {
					duration: 10,
					ease: SteppedEase.config(1),
					'--red': 'transparent',
					'--orange': '#ff8100',
					'--green': 'transparent',
					'--content': ''
				})
				.to(trigger, {
					duration: 10,
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
					duration: 20,
					'--red': 'transparent',
					'--orange': 'transparent',
					'--green': '#7fbf62',
					'--content': '"GO!!"',
					scale: 0.2,
					autoAlpha: 0,
					ease: 'sine',
					zIndex: -20,
					force3D: false,
					xPercent: 40,
					yPercent: 40
				});
		}

		// const scrollListener = ScrollTrigger.create({
		// 	trigger,
		// 	start: 'top 50%',
		// 	end: 'bottom 0%',
		// 	scrub: true,
		// 	markers: true,
		// 	onEnter: function () {
		// 		// show(trigger);
		// 	},
		// 	onLeave: function () {
		// 		// hide(trigger);
		// 	},
		// 	onEnterBack: function () {
		// 		// show(trigger);
		// 	},
		// 	onLeaveBack: function () {
		// 		// hide(trigger);
		// 	}
		// });
		// return () => scrollListener.revert();
	}, [tl]);

	return (
		<div ref={ref}>
			<ReadyFrameStyle style={{ animationPlayState }} data-type={ready}>
				<img
					className={squiggly}
					src={readyFramePng}
					alt="Are you ready?"
				/>
			</ReadyFrameStyle>
		</div>
	);
}

const ReadyFrameStyle = styled.div`
	--width: 20vw;

	width: var(--width);
	position: fixed;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: -1;

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
		box-shadow: 4.5vw 0 var(--orange), 9.5vw 0 var(--green);
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
