import { css } from '@linaria/core';

export const fastShake = css`
	animation: shake 0.5s infinite;

	@keyframes shake {
		0% {
			transform: translateY(-10%);
		}
		100% {
			transform: translateY(5%);
		}
	}
`;

export const slowShake = css`
	animation: shake 2.5s infinite alternate;

	@keyframes shake {
		0% {
			transform: translateY(-10%);
		}
		100% {
			transform: translateY(5%);
		}
	}
`;
