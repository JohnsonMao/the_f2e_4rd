import { Fragment } from 'react';
import Img from '@/components/Img';

export default function Text({ s }) {
	const isArray = Array.isArray(s?.text);
	const hasGroup = Object.hasOwn(s || {}, 'group');
	const Tag = hasGroup ? s.group.tag : Fragment;

	return (
		<Tag {...s.group}>
			{isArray
				? s.text.map((t, i) => <Text s={t} key={i} />)
				: s && <T t={s} />}
		</Tag>
	);
}

function T({ t }) {
	const Tag = t.tag || 'div';
	const hasMark = typeof t.text === 'string' && t.text.includes('_mark_');
	const textArray = hasMark ? t.text?.split('_mark_') : [];

	const layoutImg = import.meta.glob(
		'/src/assets/images/layouts/**/*.(png|svg|jpeg)',
		{
			eager: true,
			import: 'default'
		}
	);

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
					src={layoutImg[`/src/assets/images/layouts${t.prefixImg}`]}
					alt={t.prefixAlt}
					style={t.prefixStyle}
				/>
			)}
			{hasMark
				? textArray.map((m, i) =>
						i % 2 === 1 ? (
							<span className='mark' key={i}>{m}</span>
						) : (
							<span key={i}>{m}</span>
						)
                )
				: t.text}
		</Tag>
	);
}
