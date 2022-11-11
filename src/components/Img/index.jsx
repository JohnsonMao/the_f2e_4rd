import { styled } from '@linaria/react';

export default function Img(props) {
	const setComplete = (e) => {
		console.log(e.target);
	};

	return <ImgContainer {...props} onLoad={setComplete} onError={setComplete} />;
}

const ImgContainer = styled.img`
	width: 100%;
	filter: blur(var(--blur));
`;
