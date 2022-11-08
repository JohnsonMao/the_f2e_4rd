import React from 'react';
import sectionsConfig from '@/assets/config/sections.json';
import Background from './Background';
import List from './List';

export default React.forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			{sectionsConfig.map((section, index) => {
				const TitleTag = section.title?.tag || 'div';

				return (
					<section style={{ height: '100vh' }} key={index}>
						<TitleTag>
							{section.title?.text || section.title}
						</TitleTag>
						{Array.isArray(section.list) && (
							<List section={section} />
						)}
						<Background section={section} />
					</section>
				);
			})}
		</div>
	);
});
