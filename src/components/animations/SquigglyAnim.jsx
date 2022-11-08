import { css } from '@linaria/core';

const squiggly = css`
	animation: squiggly 0.3s infinite;

	@keyframes squiggly {
		0% {
			filter: url('#squiggly-0');
		}
		25% {
			filter: url('#squiggly-1');
		}
		50% {
			filter: url('#squiggly-2');
		}
		75% {
			filter: url('#squiggly-3');
		}
		100% {
			filter: url('#squiggly-4');
		}
	}
`;

export default squiggly;