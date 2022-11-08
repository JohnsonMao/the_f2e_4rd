import { css } from '@linaria/core';
import Logo from '@images/layouts/common/logo.png';

export default function Header() {
	return (
		<div className={logoStyle}>
			<img src={Logo} alt="The F2E 4rd"/>
		</div>
	);
}

const logoStyle = css`
    position: fixed;
    top: 30px;
    left: 30px;
	width: 20%;
	max-width: 250px;

	img {
		width: 100%;
	}
`
