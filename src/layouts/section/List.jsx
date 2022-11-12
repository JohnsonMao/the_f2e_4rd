import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import Img from '@/components/Img';
import Button from '@/components/Button';
import { getAssetsFile } from '@/utils';
import Text from './Text';

export default function List({ section }) {
	const setFlexDirection = (flexDirection, index) => {
		let result = flexDirection?.replace('odd', '');
		if (flexDirection?.includes('odd') && index % 2 === 1) {
			return `${result}-reverse`;
		}
		return result || 'column';
	}

	return (
		<Flex as="ul" className={container} width={section.width}>
			{section.list.map((item, index) => (
				<Flex
					as="li"
					key={index}
					className="col gsap-text"
					col={section.col}
					flexDirection={setFlexDirection(section.flexDirection, index)}
				>
					{Array.isArray(item) &&
						item.map((s, i) => {

							return (
								<Flex
									flexDirection={s.flexDirection}
									style={s.flexStyle}
									key={i}
								>
									{s.button && <Button />}
									{s.text && <Text s={s} />}
									{s.img && (
										<Img
											width="100%"
											src={getAssetsFile(
												`/src/assets/images/sections${s.img}`
											)}
											alt={s.alt}
										/>
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
