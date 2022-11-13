import { useCallback, Fragment } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import Img from '@/components/Img';
import Button from '@/components/Button';
import frame from '@/assets/images/layouts/common/frame.png';
import light from '@/assets/images/layouts/common/light.png';
import { useTimeline } from '@/hooks';
import * as gsapSetting from '@/utils/gsapSetting';
import Text from './Text';

export default function List({ section, index, length }) {
	const trigger = '.gsap-text';
	const animateKey = section?.['data-animate'];

	const exec = useCallback(
		(tl) => {
			if (index === 0) {
				tl.to(trigger, {
					duration: 3,
					autoAlpha: 1
				});
			} else {
				tl.fromTo(
					`${trigger}`,
					gsapSetting?.[`${animateKey}From`] ||
						gsapSetting.defaultFrom,
					gsapSetting?.[`${animateKey}To`] || gsapSetting.defaultTo
				);
			}
			if (index !== length - 1) {
				tl.to(trigger, {
					autoAlpha: 0
				});
			}
		},
		[trigger, index, length]
	);
	const [ref] = useTimeline(
		{
			trigger,
			markers: false,
			start: 'top 20%',
			end: 'top -80%',
			scrub: true
		},
		exec
	);

	const setFlexDirection = (flexDirection, index) => {
		let result = flexDirection?.replace('odd', '');
		if (flexDirection?.includes('odd') && index % 2 === 1) {
			return `${result}-reverse`;
		}
		return result || 'column';
	};

	const sectionImg = import.meta.glob(
		'/src/assets/images/sections/**/*.png',
		{
			eager: true,
			import: 'default'
		}
	);

	return (
		<div ref={ref}>
			<Flex
				as="ul"
				className={container}
				width={section.width}
				gap={section.gap || ''}
				style={section.listStyle}
			>
				{section.list.map((item, index) => (
					<Flex
						as="li"
						key={index}
						className={['col', 'gsap-text', `item-${index}`].join(
							' '
						)}
						col={section.col}
						flexDirection={setFlexDirection(
							section.flexDirection,
							index
						)}
					>
						{Array.isArray(item) &&
							item.map((s, i) => {
								const ImgSpecial = s.frame
									? ImgFrame
									: ImgLight;
								const ImgTag =
									s.frame || s.light ? ImgSpecial : Fragment;

								return (
									<Flex
										flexDirection={s.flexDirection}
										style={s.flexStyle}
										key={i}
									>
										{s.button && (
											<Button
												className={s.btnClassName}
											/>
										)}
										{s.text && <Text s={s} />}
										{s.img && (
											<ImgTag>
												<Img
													width="100%"
													style={s.style}
													src={
														sectionImg[
															`/src/assets/images/sections${s.img}`
														]
													}
													alt={s.alt}
												/>
											</ImgTag>
										)}
									</Flex>
								);
							})}
					</Flex>
				))}
			</Flex>
		</div>
	);
}

const Flex = styled.div`
	--flex-width: ${(props) => props.width || 12};
	--col: ${(props) => props.col || 4};

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: ${(props) => props.flexDirection || 'row'};
	flex-wrap: wrap;
	flex: 1;
	gap: ${(props) => props.gap || ''};
	z-index: 10;

	> li {
		flex: 1 0 calc(100% / var(--col));
	}

	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

const container = css`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: calc((var(--layout-width) - 180px) * (var(--flex-width) / 12));
`;

const ImgFrame = styled.div`
	padding: 32px;
	background-image: url(${frame});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: 4px;
`;

const ImgLight = styled.div`
	position: relative;
	animation: award 2s linear infinite;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${light});
		background-size: contain;
		background-repeat: no-repeat;
		z-index: -10;
		animation: light 2s linear infinite;
		filter: opacity(0.6) blur(2px);
	}

	@keyframes light {
		0% {
			transform: rotate(-10deg) scale(1.05);
		}
		12.5% {
			transform: rotate(45deg) scale(1.025);
		}
		25% {
			transform: rotate(100deg) scale(1);
		}
		37.5% {
			transform: rotate(135deg) scale(0.975);
		}
		50% {
			transform: rotate(170deg) scale(0.95);
		}
		62.5% {
			transform: rotate(225deg) scale(0.975);
		}
		75% {
			transform: rotate(280deg) scale(1);
		}
		87.5% {
			transform: rotate(315deg) scale(1.025);
		}
		100% {
			transform: rotate(350deg) scale(1.05);
		}
	}
	@keyframes award {
		0%,
		100% {
			transform: rotate(10deg) scale(0.95);
		}
		12.5%,
		87.5% {
			transform: rotate(0deg) scale(0.975);
		}
		25%,
		75% {
			transform: rotate(-10deg) scale(1);
		}
		37.5%,
		62.5% {
			transform: rotate(0deg) scale(1.025);
		}
		50% {
			transform: rotate(10deg) scale(1.05);
		}
	}
`;
