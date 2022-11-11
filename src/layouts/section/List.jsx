import { css, cx } from '@linaria/core';

export default function List({ section }) {
	const flexWidth = section.flex === 10 ? flex10 : flex12;
	const col = section.col ? 'col' : '';

	return (
		<ul className={cx(container, flex, flexWidth)}>
			{section.list.map((item, index) => (
				<li
					key={index}
					className={[flex, col, 'gsap-text'].join(' ')}
					style={{
						'--col': section.col
					}}
				>
					{Array.isArray(item) &&
						item.map((t, i) => {
							const Tag = t.tag || 'span';

							return (
								<Tag
									key={i}
									className={t.className}
									style={{
										background: `var(--${t.bg}-color)`,
										color: `var(--${t.color}-color)`,
										...t.style
									}}
								>
									{t.prefixImg && (
										<img
											src={import.meta.resolve(
												`/src/assets/images/layouts${t.prefixImg}`
											)}
											width={t.prefixW}
											alt={t.prefixAlt}
											style={t.prefixStyle}
										/>
									)}
									{t.text}
								</Tag>
							);
						})}
				</li>
			))}
		</ul>
	);
}

const flex = css`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 15%;
	z-index: 10;

	.col {
		flex: 1 0 calc(100% / var(--col));
		flex-direction: column;
		border: 1px solid #0006;
	}
`;

const container = css`
	height: 100vh;
`

const flex10 = css`
	margin: 0 auto;
	width: calc(var(--layout-width) * 0.8);
`;

const flex12 = css`
	left: 0;
	width: var(--layout-width);
`;
