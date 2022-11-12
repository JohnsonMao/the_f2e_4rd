import { css } from '@linaria/core';
import startPng from '@images/sections/section0/start.png';
import logoTextPng from '@images/layouts/common/logo_text.png';

export default function Start() {
	return (
		<div className='gsap-start'>
			<img className={startStyle} src={startPng} alt="start" />
			<img
				className={logoTextStyle}
				src={logoTextPng}
				alt="The F2E 4rd"
			/>
		</div>
	);
}

const startStyle = css`
	position: absolute;
	height: 105vh;
	bottom: -5vh;
	left: 50%;
	transform: translateX(-50%);
`;

const logoTextStyle = css`
	position: absolute;
	height: 25vh;
	left: 50%;
	bottom: 72vh;
	transform: translateX(-50%);
	object-fit: contain;
`;
