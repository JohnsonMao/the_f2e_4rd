import { css, cx } from '@linaria/core';

export default function List({ section }) {
	const flexWidth = section.flex === 10 ? flex10 : flex12;
	const col = section.col ? 'col' : '';

	return (
		<ul className={cx(flex, flexWidth)}>
			{section.list.map((item, index) => (
				<li
					key={index}
					className={[flex, col].join(' ')}
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

	.col {
		flex: 1 0 calc(100% / var(--col));
		flex-direction: column;
	}
`;

const flex10 = css`
	margin: 0 auto;
	width: 83.33%;
	height: 100vh;
`;

const flex12 = css`
	width: 100%;
	height: 100vh;
`;
