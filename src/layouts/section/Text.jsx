import Img from '@/components/Img';

export default function Text({ s }) {
	const isArray = Array.isArray(s?.text);

	return isArray ? (
		s.text.map((t, i) => <Text s={t} key={i} />)
	) : (
		s && <T t={s} />
	);
}

function T({ t }) {
	const Tag = t.tag || 'div';

	const layoutImg = import.meta.glob('/src/assets/images/layouts/**/*.(png|svg|jpeg)', {
		eager: true,
		import: 'default'
	});

	return (
		<Tag
			className={t.className}
			style={{
				background: t.bg && `var(--${t.bg}-color)`,
				color: t.color && `var(--${t.color}-color)`,
				...t.style
			}}
		>
			{t.prefixImg && (
				<Img
					src={layoutImg[
						`/src/assets/images/layouts${t.prefixImg}`
					]}
					alt={t.prefixAlt}
					style={t.prefixStyle}
				/>
			)}
			{t.text}
		</Tag>
	);
}
