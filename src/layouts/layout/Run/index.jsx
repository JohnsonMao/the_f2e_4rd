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
				<img src={Road} alt="road" />
				<img className="character f2e" src={F2E_gif} alt="前端工程師" />
				<img className="character team" src={Team_gif} alt="團體組" />
				<img className="character ui" src={UI_gif} alt="UI 設計師" />
			</div>
			<ReadyGo />
		</>
	);
}

const runStyle = css`
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: -1;

	img {
		display: block;
		width: var(--layout-width);
	}
	.character {
		--width: min(30%, 30vh);
		position: absolute;
		left: 50%;
		bottom: 10px;
		width: var(--width);
		filter: drop-shadow(2px 4px 6px #0008);
	}

	.f2e {
		transform: translate(-150%, 0);
	}

	.ui {
		transform: translate(-50%, 0);
	}

	.team {
		transform: translate(50%, 0);
	}
`;
