import { styled } from '@linaria/react';
import { useEffect, useRef } from 'react';

export default function Img(props) {
	const { src } = props;
	const isFirst = useRef(true);

	useEffect(() => {
		if (isFirst.current) {
			let image = new Image();
			const setComplete = (e) => {
				console.log(e.target);
				image = null;
			};

			image.onload = setComplete;
			image.onerror = setComplete;
			image.src = src;
			isFirst.current = false;
		}
	}, [src]);

	return <ImgContainer {...props} />;
}

const ImgContainer = styled.img`
	width: 100%;
	filter: blur(var(--blur));
`;
