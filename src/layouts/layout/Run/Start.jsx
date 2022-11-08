import startPng from '@images/sections/section0/start.png';
import { css } from '@linaria/core';
import logoTextPng from '@images/layouts/common/logo_text.png';

export default function Start() {
	return (
		<>
			<img className={startStyle} src={startPng} alt="start" />
			<img
				className={logoTextStyle}
				src={logoTextPng}
				alt="The F2E 4rd"
			/>
		</>
	);
}

const startStyle = css`
	position: absolute;
	height: 100vh;
	bottom: 0;
	transform: scaleX(1.2);
	z-index: -1;
`;

const logoTextStyle = css`
	position: fixed;
	height: 25vh;
	bottom: 72vh;
	object-fit: contain;
`;
