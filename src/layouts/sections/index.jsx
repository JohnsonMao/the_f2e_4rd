import React from 'react';
import sectionsConfig from '@/assets/config/sections.json';
import Background from './Background';
import List from './List';
import Run from './Run';

export default function Selections() {
	return (
		<>
			{sectionsConfig.map((section, index) => {
				const TitleTag = section.title?.tag || 'div';

				return (
					<section data-type='section' style={{ height: '100vh' }} key={index}>
						<TitleTag className="gsap-title">
							{section.title?.text || section.title}
						</TitleTag>
						{Array.isArray(section.list) && (
							<List section={section} />
						)}
						<Run />
						<Background section={section} />
					</section>
				);
			})}
		</>
	);
}
