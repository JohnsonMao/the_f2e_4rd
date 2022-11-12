import { css } from '@linaria/core';
import Hand from '@images/layouts/common/btn_join_hand.png';
import Btn from '@images/layouts/common/btn_join.png';
import { fastShake } from '@styles/animations/ShakeAnim';

export default function Button(props) {
    const className = [
        btnStyle,
        props.className
    ]

	return (
		<button className={className.join(' ')}>
			<img
				className={[fastShake, 'hover'].join(' ')}
				src={Hand}
				width="60"
				alt="Click"
			/>
			<img src={Btn} width="80" alt="Button" />
		</button>
	);
}

const btnStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;

    .hover {
        opacity: 0;
    }

    &:hover .hover,
    &.alwaysHover .hover {
        opacity: 1;
    }
    &.btn-l {
        transform: scale(1.5);
    }
`;
