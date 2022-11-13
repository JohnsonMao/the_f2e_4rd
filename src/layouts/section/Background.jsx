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
					case 'tree': return 80;
					case 'grass': return 80;
					default: return 60
				}
			}
			const handleYPercent = (type) => {
				switch (type) {
					case 'tree': return 30;
					case 'grass': return 60;
					default: return 60
				}
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
				tl.to(`${trigger}.left`, {
						duration: 2,
						autoAlpha: 0,
						xPercent: handleXPercent(bgType),
						yPercent: handleYPercent(bgType) * -1,
						transformOrigin: 'bottom',
						scale: 0.3
					})
					.to(
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
	const [ref] = useTimeline(
		{
			trigger,
			markers: false,
			start: 'top 20%',
			end: bgType ? 'top -50%' : 'top -100%',
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
					width={bg.width}
					zIndex={bg.zIndex}
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
	user-select: none;
`;
