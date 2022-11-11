import React from 'react';
import { styled } from '@linaria/react';
import Logo from './layout/Logo';
import User from './layout/User';
import Sidebar from './layout/Sidebar';
import JoinButton from './layout/JoinButton';
import Map from './layout/Map';
import Run from './layout/Run';
import Section from './section';
import sectionsConfig from '@/assets/config/sections';

export default function layout() {
	return (
		<LayoutContainer length={sectionsConfig.length}>
			<Sidebar />
			{sectionsConfig.map((section, index) => (
				<Section key={index} section={section} />
			))}
			<Logo />
			<User />
			<JoinButton />
			<Map />
			<Run />
		</LayoutContainer>
	)
}

const LayoutContainer = styled.div`
	--layout-width: min(1440px, 100vh, 90vw);
	position: relative;
	margin: 0 auto;
	width: var(--layout-width);
	height: ${(props) => (+props.length || 1) * 100}vh;
`;
