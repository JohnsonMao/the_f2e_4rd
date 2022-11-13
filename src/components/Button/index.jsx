import { css } from '@linaria/core';
import Img from '@/components/Img';
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
			<Img
				className={[fastShake, 'hover'].join(' ')}
				src={Hand}
				width="60px"
				alt="Click"
			/>
			<Img src={Btn} width="80px" alt="Button" />
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
