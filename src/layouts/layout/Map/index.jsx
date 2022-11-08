import { css } from '@linaria/core';
import { ReactComponent as MapSvg } from '@images/layouts/map.svg';

export default function Map() {
	return (
		<div className={mapStyle}>
			<MapSvg />
		</div>
	);
}

const mapStyle = css`
	position: fixed;
	bottom: 30px;
	left: 30px;
`;
