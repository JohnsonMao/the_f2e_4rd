import squiggly from '@/components/animations/SquigglyAnim';

export default function Background({ section }) {
	return (
		<>
			{Array.isArray(section.bg) &&
				section.bg.map((bg, i) => (
					<img
						key={i}
						width="400"
						src={import.meta.resolve(
							`/src/assets/images/sections${bg.img}`
						)}
						alt="background"
						className={[squiggly, 'scroll-bg', bg.position].join(
							' '
						)}
						style={{
							position: 'fixed',
							top: bg.position.includes('centerY') ? '33%' : '',
							bottom: bg.position.includes('bottom') ? '0' : '',
							left: bg.position.includes('left') ? '5%' : '',
							right: bg.position.includes('right') ? '5%' : '',
							zIndex: -2
						}}
					/>
				))}
		</>
	);
}
