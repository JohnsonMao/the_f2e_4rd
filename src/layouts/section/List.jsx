import { css, cx } from '@linaria/core';
import Img from '@/components/Img';

export default function List({ section }) {
	return (
		<ul
			className={cx(container, flex)}
			style={{
				'--flex-width': section.width || 12
			}}
		>
			{section.list.map((item, index) => (
				<li
					key={index}
					className={[flex, 'col', 'gsap-text'].join(' ')}
					style={{
						'--col': section.col || 4
					}}
				>
					{Array.isArray(item) &&
						item.map((s, i) => {
							const Tag = s.tag || 'span';

							return (
								<div key={i}>
									<Tag
										className={s.className}
										style={{
											background: `var(--${s.bg}-color)`,
											color: `var(--${s.color}-color)`,
											...s.style
										}}
									>
										{s.prefixImg && (
											<img
												src={import.meta.resolve(
													`/src/assets/images/layouts${s.prefixImg}`
												)}
												width={s.prefixW}
												alt={s.prefixAlt}
												style={s.prefixStyle}
											/>
										)}
										{s.text}
									</Tag>
									{s.img && (
										<Img
											width="100%"
											src={import.meta.resolve(
												`/src/assets/images/sections${s.img}`
											)}
											alt={s.alt}
										/>
									)}
								</div>
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
	margin: 0 auto;
	height: 100vh;
	width: calc(var(--layout-width) * (var(--flex-width) / 12));
`;
