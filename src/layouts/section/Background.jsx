import Img from '@/components/Img';
import squiggly from '@styles/animations/SquigglyAnim';
import { slowShake } from '@styles/animations/ShakeAnim';
import { styled } from '@linaria/react';

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
				<backgroundContainer
					key={i}
					className={[squiggly, 'gsap-bg'].join(' ')}
				>
					<Img
						width="100%"
						src={import.meta.resolve(
							`/src/assets/images/sections${bg.img}`
						)}
						alt="background"
						className={slowShake}
						style={{
							animationDelay: i + 's'
						}}
					/>
				</backgroundContainer>
			))}
		</>
	);
}

const backgroundContainer = styled.div`
	position: absolute;
	top: ${props => props.top || ''};
	left: ${props => props.left || ''};
	right: ${props => props.right || ''};
	bottom: ${props => props.bottom || ''};
	width: ${props => props.width || '30%'};
	z-index: -10;
	user-select: none;
`