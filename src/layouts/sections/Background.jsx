import squiggly from '@/components/animations/SquigglyAnim';
import { slowShake } from '@/components/animations/ShakeAnim';

export default function Background({ section }) {
	return (
		<>
			{Array.isArray(section.bg) &&
				section.bg.map((bg, i) => (
					<div
						key={i}
						className={[squiggly, 'gsap-bg', bg.position].join(
							' '
						)}
						style={{
							position: 'fixed',
							top: bg.position.includes('centerY') ? '36%' : '',
							bottom: bg.position.includes('bottom') ? '0' : '',
							left: bg.position.includes('left') ? '14%' : '',
							right: bg.position.includes('right') ? '10%' : '',
							width: i ? '25%' : '22%',
							zIndex: -10,
							userSelect: 'none'
						}}
					>
						<img
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
					</div>
				))}
		</>
	);
}
