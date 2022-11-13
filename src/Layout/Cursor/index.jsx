import { useState, useEffect } from 'react';
import { styled } from '@linaria/react';

export default function Cursor() {
	const [point, setPoint] = useState([0, 0]);
	const [hover, setHover] = useState(false);

	useEffect(() => {
		const hoverNodeName = ['BUTTON', 'A'];

		function mousePoint(e) {
			e.preventDefault();
			setPoint([e.pageX, e.pageY]);
			setHover(hoverNodeName.includes(e.target.nodeName));
		}

		window.addEventListener('mousemove', mousePoint);

		return () => window.removeEventListener('mousemove', mousePoint);
	}, [point]);

	return (
		<>
			<CursorStyled
				bg="#aaa"
				scale={hover ? 3 : 1}
				x={point[0] - 5}
				y={point[1] - 5}
			/>
		</>
	);
}

const CursorStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: ${(props) => props.bg || '#000'};
	pointer-events: none;
	transform: translate(
		${(props) => `${props.x || '0'}px, ${props.y || '0'}px`}
	);
	will-change: transform;
	mix-blend-mode: exclusion;
	z-index: 1000;

	&::after {
		content: '';
		position: absolute;
		top: inherit;
		left: inherit;
		width: inherit;
		height: inherit;
		background: ${(props) => props.bg || '#000'};
		border-radius: inherit;
		transform: scale(${(props) => props.scale || 1});
		transition: transform 0.15s;
	}
`;
