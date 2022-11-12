import { Fragment } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import Img from '@/components/Img';
import Button from '@/components/Button';
import frame from '@/assets/images/layouts/common/frame.png';
import light from '@/assets/images/layouts/common/light.png';
import Text from './Text';

export default function List({ section }) {
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
		<Flex as="ul" className={container} width={section.width}>
			{section.list.map((item, index) => (
				<Flex
					as="li"
					key={index}
					className="col gsap-text"
					col={section.col}
					flexDirection={setFlexDirection(
						section.flexDirection,
						index
					)}
				>
					{Array.isArray(item) &&
						item.map((s, i) => {
							const ImgSpecial = s.frame ? ImgFrame : ImgLight;
							const ImgTag =
								s.frame || s.light ? ImgSpecial : Fragment;

							return (
								<Flex
									flexDirection={s.flexDirection}
									style={s.flexStyle}
									key={i}
								>
									{s.button && (
										<Button className={s.btnClassName} />
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
		border: 1px solid #0006;
	}
`;

const container = css`
	margin: 0 auto;
	width: calc(var(--layout-width) * (var(--flex-width) / 12));
`;

const ImgFrame = styled.div`
	padding: 20px;
	background-image: url(${frame});
	background-size: contain;
`;

const ImgLight = styled.div`
	position: relative;
	animation: zoom 1.5s linear infinite;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${light});
		background-size: contain;
		z-index: -10;
		animation: light 1.5s linear infinite;
		filter: opacity(0.6) blur(2px);
	}

	@keyframes light {
		0% {
			transform: rotate(0deg);
		}
		33% {
			transform: rotate(120deg);
		}
		66% {
			transform: rotate(240deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes zoom {
		0% {
			transform: scale(0.9);
		}
		25% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		75% {
			transform: scale(1);
		}
		100% {
			transform: scale(0.9);
		}
	}
`;
