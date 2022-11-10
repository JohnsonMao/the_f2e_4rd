import { css } from '@linaria/core';
import Hand from '@images/layouts/common/btn_join_hand.png';
import Btn from '@images/layouts/common/btn_join.png';
import { fastShake } from '@styles/animations/ShakeAnim';

export default function JoinButton() {
	return (
		<button className={joinBtn}>
			<img
				className={fastShake}
				src={Hand}
				width="60"
				alt="Join"
			/>
			<img src={Btn} width="80" alt="Button" />
		</button>
	);
}

const joinBtn = css`
	position: fixed;
	bottom: 30px;
	right: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;

	b {
		color: var(--primary-color);
	}

	&::before {
		content: 'JOIN';
		font-weight: bold;
		font-size: 24px;
		color: var(--primary-color);
	}
`;
