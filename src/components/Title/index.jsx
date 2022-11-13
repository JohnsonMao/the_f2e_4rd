import { css } from '@linaria/core';

export default function Title(props) {
	const Tag = props.tag || 'div';
	const className = [
		props.tag === 'h1' ? h1 : '',
		props.tag === 'h2' ? h2 : '',
		props.className
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
	top: 27vh;
	padding: 10px 40px;
	color: white;
	background-color: var(--heightlight-color);
	border-radius: var(--fz);
	transform: translateX(-50%);
`;

const h2 = css`
	position: relative;
	margin: 0 auto;
	padding: 18px 4px;
	width: max-content;
	background-image: url(@images/layouts/title/bg_talking_c.png);
	background-repeat: no-repeat;
	background-size: 100% 103px;
	margin-bottom: 1rem;

	@media (max-width: 767px) {
		width: 100%;
		text-align: center;
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: -1%;
		background-size: contain;
		background-repeat: no-repeat;

		@media (max-width: 767px) {
			display: none;
		}
	}

	&::before {
		right: 99%;
		background-image: url(@images/layouts/title/bg_talking_l.png);
		width: 54px;
		height: 103px;
	}
	&::after {
		left: 99%;
		background-image: url(@images/layouts/title/bg_talking_r.png);
		width: 54px;
		height: 104px;
	}
`;
