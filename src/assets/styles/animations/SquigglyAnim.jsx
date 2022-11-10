import { css } from '@linaria/core';

const squiggly = css`
	/* animation: squiggly 0.3s infinite; */

	@keyframes squiggly {
		0%, 75% {
			filter: url('#squiggly-0');
		}
		25%, 100% {
			filter: url('#squiggly-1');
		}
		50% {
			filter: url('#squiggly-2');
		}
	}
`;

export default squiggly;