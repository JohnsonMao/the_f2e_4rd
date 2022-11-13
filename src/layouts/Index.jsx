import { useCallback } from 'react';
import { styled } from '@linaria/react';
import { useTimeline } from '@/hooks';
import Logo from './layout/Logo';
import User from './layout/User';
import Sidebar from './layout/Sidebar';
import JoinButton from './layout/JoinButton';
import Map from './layout/Map';
import Run from './layout/Run';
import Section from './Section';

export default function Layout() {
	const sectionModules = import.meta.glob(
		'/src/assets/config/sections/*.json',
		{
			eager: true,
			import: 'default'
		}
	);

	const sectionsConfig = Object.values(sectionModules);

	return (
		<LayoutContainer length={sectionsConfig.length}>
			<Sidebar />
			{sectionsConfig.map((section, index) => (
				<Section key={index} index={index} section={section} />
			))}
			<Logo />
			<User />
			<JoinButton />
			<Map />
			<Run length={sectionsConfig.length}/>
		</LayoutContainer>
	);
}

const LayoutContainer = styled.div`
	--layout-width: min(1440px, 90vw);

	position: relative;
	margin: 0 auto;
	width: var(--layout-width);
	height: ${(props) => (+props.length || 1) * 100}vh;
`;
