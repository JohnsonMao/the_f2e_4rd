import { styled } from '@linaria/react';

export default function Img(props) {
	const setComplete = (e) => {
		// console.log(e.target);
	};

	return <ImgContainer {...props} width={props.width} onLoad={setComplete} onError={setComplete} />;
}

const ImgContainer = styled.img`
	width: ${props => props.width || '100%'};
	filter: blur(var(--blur));
`;
