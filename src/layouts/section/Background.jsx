import { styled } from '@linaria/react';
import Img from '@/components/Img';
import squiggly from '@styles/animations/SquigglyAnim';
import { slowShake } from '@styles/animations/ShakeAnim';
import { getAssetsFile } from '@/utils';

export default function Background({ section }) {
	// useLayoutEffect(() => {
	// 	const ctx = gsap.context(() => {
	// 		const tl = gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: '[data-type="section"]',
	// 				markers: import.meta.env.DEV,
	// 				start: 'bottom 90%',
	// 				end: 'bottom 5%',
	// 				scrub: true
	// 			}
	// 		});
	// 		tl.to('.gsap-bg.left', {
	// 			scale: 0.2,
	// 			autoAlpha: 0,
	// 			ease: 'none',
	// 			zIndex: -20,
	// 			force3D: false,
	// 			xPercent: 100
	// 			// motionPath: {
	// 			// 	path: 'M 0 0 C 120 -40 140 -40 350 100',
	// 			// 	alignOrigin: [0.5, 0.5]
	// 			// }
	// 		}).to(
	// 			'.gsap-bg.right',
	// 			{
	// 				scale: 0.2,
	// 				autoAlpha: 0,
	// 				ease: 'none',
	// 				zIndex: -20,
	// 				force3D: false,
	// 				xPercent: -100
	// 				// motionPath: {
	// 				// 	path: 'M 0 0 C -120 -40 -140 -40 -350 100',
	// 				// 	alignOrigin: [0.5, 0.5]
	// 				// }
	// 			},
	// 			'<'
	// 		);
	// 		// gsap.utils.toArray('section').forEach(function (ele) {
	// 		// 	ScrollTrigger.create({
	// 		// 		trigger: ele,
	// 		// 		start: 'top 50%',
	// 		// 		end: 'bottom 50%',
	// 		// 		scrub: true,
	// 		// 		markers: true
	// 		// 	});
	// 		// });
	// 	}, sectionsRef);

	// 	return () => ctx.revert();
	// }, []);

	return (
		<>
			{section.bg.map((bg, i) => (
				<BackgroundContainer
					key={i}
					className={[squiggly, 'gsap-bg'].join(' ')}
					top={bg.top}
					left={bg.left}
					right={bg.right}
					bottom={bg.bottom}
					width={bg.width}
				>
					<Img
						width="100%"
						src={getAssetsFile(
							`/src/assets/images/sections${bg.img}`
						)}
						alt="background"
						className={slowShake}
						style={{
							animationDelay: i + 's'
						}}
					/>
				</BackgroundContainer>
			))}
		</>
	);
}

const BackgroundContainer = styled.div`
	position: absolute;
	top: ${props => props.top || ''};
	left: ${props => props.left || ''};
	right: ${props => props.right || ''};
	bottom: ${props => props.bottom || ''};
	width: ${props => props.width || '30%'};
	z-index: ${props => props.zIndex || '-10'};
	user-select: none;
`