import { useCallback } from 'react';
import { css } from '@linaria/core';
import Road from '@images/layouts/run/road.png';
import F2E_gif from '@images/layouts/run/character_f2e.gif';
import UI_gif from '@images/layouts/run/character_ui.gif';
import Team_gif from '@images/layouts/run/character_team.gif';
import squiggly from '@styles/animations/SquigglyAnim';
import { useTimeline } from '@/hooks';
import Start from './Start';
import ReadyGo from './ReadyGo';
import { scale, xPercent } from '@/utils/gsapSetting';

export default function Run({ length }) {
	const trigger = `.${runStyle}`;
	const road = `.${roadStyle}`;
	const character = `.${characterStyle}`;
	const f2e = '.f2e';
	const ui = '.ui';
	const team = '.team';

	const exec = useCallback(
		(tl) => {
			const f = (...rest) => {
				rest.forEach(item => {
					tl.to(item[0], item[1], item[2]);
				});
			}
			// f(
			// 	[character, ]
			// )
			tl.to(character, {
				scale: 0.5
			})
			.to(
				f2e,
				{
					xPercent: 25
				},
				'<'
			).to(
				team,
				{
					xPercent: -25
				},
				'<'
			)
				.to(
					road,
					{
						scale: 0.5
					},
					'<'
				)
				.to(character, {
					scale: 1
				})
				.to(
					road,
					{
						scale: 1
					},
					'<'
				)
				.to(character, {
					scale: 0.3
				})
				.to(
					road,
					{
						scale: 0.3
					},
					'<'
				)
				.to(character, {
					scale: 1
				})
				.to(
					road,
					{
						scale: 1
					},
					'<'
				)
				.to(character, {
					scale: 0.5
				})
				.to(
					road,
					{
						scale: 0.5
					},
					'<'
				)
				.to(character, {
					scale: 0.5
				})
				.to(
					road,
					{
						scale: 0.5
					},
					'<'
				)
				.to(character, {
					scale: 1.2
				})
				.to(
					road,
					{
						scale: 1.2
					},
					'<'
				)
				.to(character, {
					scale: 1.5,
					autoAlpha: 0
				})
				.to(
					road,
					{
						scale: 1.5,
						autoAlpha: 0
					},
					'<'
				);
		},
		[trigger, road, character, f2e, ui, team]
	);
	const [ref] = useTimeline(
		{
			trigger,
			markers: true,
			start: 'top 0%',
			end: `top ${length * -200}%`,
			scrub: true
		},
		exec
	);
	return (
		<div ref={ref}>
			<div className={[squiggly, runStyle].join(' ')}>
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
				<Start />
			</div>
			<ReadyGo />
		</div>
	);
}

const roadStyle = css`
	width: min(var(--layout-width), 100vh);
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	transform-origin: bottom;
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
	z-index: -1;
	transform-origin: bottom;
	pointer-events: none;

	.f2e {
		transform: translate(-160%, 0);
		transform-origin: right bottom;
	}

	.ui {
		transform: translate(-50%, 0);
		transform-origin: bottom;
	}

	.team {
		transform: translate(60%, 0);
		transform-origin: left bottom;
	}
`;
