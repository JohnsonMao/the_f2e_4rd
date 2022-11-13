import { useCallback } from 'react';
import { styled } from '@linaria/react';
import Img from '@/components/Img';
import squiggly from '@styles/animations/SquigglyAnim';
import { slowShake } from '@styles/animations/ShakeAnim';
import { useTimeline } from '@/hooks';

export default function Background({ section, index }) {
	const trigger = '.gsap-bg';
	const { bgType } = section;

	const exec = useCallback(
		(tl) => {
			const handleXPercent = (type) => {
				switch (type) {
					case 'tree':
						return 80;
					case 'grass':
						return 80;
					default:
						return 60;
				}
			};
			const handleYPercent = (type) => {
				switch (type) {
					case 'tree':
						return 10;
					case 'grass':
						return 60;
					default:
						return 60;
				}
			};
			if (bgType === 'center') {
				tl.fromTo(
					trigger,
					{
						clipPath: 'polygon(0 0, 0 0, 0 0, 0 100%)'
					},
					{
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
					}
				).to(trigger, {
					clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
				});
				return;
			}
			if (index === 0) {
				tl.to(`${trigger}.left`, {
					duration: 3,
					autoAlpha: 0,
					xPercent: 60,
					scale: 0.4
				}).to(
					`${trigger}.right`,
					{
						duration: 3,
						autoAlpha: 0,
						xPercent: -60,
						scale: 0.4
					},
					'<'
				);
			} else {
				tl.from(`${trigger}.left`, {
					xPercent: -20,
					yPercent: 50,
					autoAlpha: 0
				}).from(
					`${trigger}.right`,
					{
						xPercent: 20,
						yPercent: 50,
						autoAlpha: 0
					},
					'<'
				);
				tl.to(`${trigger}.left`, {
					duration: 2,
					autoAlpha: 0,
					xPercent: handleXPercent(bgType),
					yPercent: handleYPercent(bgType) * -1,
					transformOrigin: 'bottom',
					scale: 0.3
				}).to(
					`${trigger}.right`,
					{
						duration: 2,
						autoAlpha: 0,
						xPercent: handleXPercent(bgType) * -1,
						yPercent: handleYPercent(bgType) * -1,
						transformOrigin: 'bottom',
						scale: 0.3
					},
					'<'
				);
			}
		},
		[trigger, index, bgType]
	);
	const handleTypeStartEnd = (type) => {
		switch (type) {
			case 'center':
				return { start: 'top 50%', end: 'top -50%' };
			default:
				if (type) {
					return { start: 'top 20%', end: 'top -50%' };
				}
				return { start: 'top 20%', end: 'top -100%' };
		}
	};
	const [ref] = useTimeline(
		{
			...handleTypeStartEnd(bgType),
			trigger,
			markers: false,
			scrub: true
		},
		exec
	);

	const sectionImg = import.meta.glob(
		'/src/assets/images/sections/**/*.png',
		{
			eager: true,
			import: 'default'
		}
	);

	return (
		<div ref={ref}>
			{section.bg.map((bg, i) => (
				<BackgroundContainer
					key={i}
					className={[squiggly, 'gsap-bg', i ? 'right' : 'left'].join(
						' '
					)}
					top={bg.top}
					left={bg.left}
					right={bg.right}
					bottom={bg.bottom}
					padding={bg.padding}
					width={bg.width}
					zIndex={bg.zIndex}
					transform={bg.transform}
					beforeShadow={bg.beforeShadow}
					afterShadow={bg.afterShadow}
				>
					<Img
						width="100%"
						src={sectionImg[`/src/assets/images/sections${bg.img}`]}
						alt="background"
						className={bgType ? '' : slowShake}
						style={{
							animationDelay: i + 's'
						}}
					/>
				</BackgroundContainer>
			))}
		</div>
	);
}

const BackgroundContainer = styled.div`
	position: absolute;
	top: ${(props) => props.top || ''};
	left: ${(props) => props.left || ''};
	right: ${(props) => props.right || ''};
	bottom: ${(props) => props.bottom || ''};
	width: ${(props) => props.width || '30%'};
	z-index: ${(props) => props.zIndex || '-10'};
	transform: ${(props) => props.transform || ''};
	padding: ${props => props.padding || ''};
	user-select: none;
	
	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
	}
	
	&::before {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		box-shadow: ${props => props.beforeShadow || ''};
	}
	
	&::after {
		width: 2px;
		height: 80px;
		box-shadow: ${props => props.afterShadow || ''};
	}

`;
