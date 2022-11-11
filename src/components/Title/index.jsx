import { css } from '@linaria/core';

export default function Title(props) {
	const Tag = props.tag || 'div';
	const className = [
		props.tag === 'h1' ? h1 : '',
		props.tag === 'h2' ? h2 : '',
		'gsap-title'
	];

	return (
		<Tag {...props} title={props.children} className={className.join(' ')}>
			{props.children}
		</Tag>
	);
}

const h1 = css`
	position: absolute;
	left: 50%;
	top: calc(28vh);
	padding: 10px 40px;
	color: white;
	background-color: var(--heightlight-color);
	border-radius: var(--fz);
	transform: translateX(-50%);
`;

const h2 = css`
	position: relative;
	margin: 0 auto;
	padding: 28px 0;
	width: max-content;
	background-image: url(@images/layouts/title/bg_talking_c.png);
	background-size: cover;
	background-repeat: no-repeat;
	background-size: 600px 102px;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		background-size: contain;
		background-repeat: no-repeat;
	}

	&::before {
		right: 100%;
		background-image: url(@images/layouts/title/bg_talking_l.png);
		width: 52px;
		height: 102px;
	}
	&::after {
		left: 100%;
		background-image: url(@images/layouts/title/bg_talking_r.png);
		width: 60px;
		height: 102px;
	}
`;
