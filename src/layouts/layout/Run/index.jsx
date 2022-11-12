import { css } from '@linaria/core';
import Road from '@images/layouts/run/road.png';
import F2E_gif from '@images/layouts/run/character_f2e.gif';
import UI_gif from '@images/layouts/run/character_ui.gif';
import Team_gif from '@images/layouts/run/character_team.gif';
import squiggly from '@styles/animations/SquigglyAnim';
import Start from './Start';
import ReadyGo from './ReadyGo';

export default function Run() {
	return (
		<>
			<div className={[squiggly, runStyle].join(' ')}>
				<Start />
				<img className={roadStyle} src={Road} alt="road" />
				<img
					className={[characterStyle, 'f2e'].join(' ')}
					src={F2E_gif}
					alt="前端工程師"
				/>
				<img
					className={[characterStyle, 'team'].join(' ')}
					src={Team_gif}
					alt="團體組"
				/>
				<img
					className={[characterStyle, 'ui'].join(' ')}
					src={UI_gif}
					alt="UI 設計師"
				/>
			</div>
			<ReadyGo />
		</>
	);
}

const roadStyle = css`
	width: min(var(--layout-width), 100vh);
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
`;

const characterStyle = css`
	--width: min(30%, 30vh);
	position: absolute;
	left: 50%;
	bottom: 10px;
	width: var(--width);
	filter: drop-shadow(2px 4px 6px #0008);
`;

const runStyle = css`
	position: fixed;
	top: 0;
	left: 10%;
	right: 10%;
	bottom: 0;
	z-index: 1;

	.f2e {
		transform: translate(-160%, 0);
	}

	.ui {
		transform: translate(-50%, 0);
	}

	.team {
		transform: translate(60%, 0);
	}
`;
