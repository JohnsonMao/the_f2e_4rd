import { css } from '@linaria/core';
import User from '@images/layouts/common/user.png';
import Img from '@/components/Img';

export default function Header() {
	return (
		<a href="/" className={userStyle}>
			<Img src={User} alt="User button" />
		</a>
	);
}

const userStyle = css`
	position: fixed;
	top: 30px;
	right: 30px;
	min-width: 40px;
	width: 5%;
	max-width: 80px;

	img {
		width: 100%;
	}
`;
