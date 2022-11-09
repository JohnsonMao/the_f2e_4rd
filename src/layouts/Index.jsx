import React from 'react';
import { css } from '@linaria/core';
import Logo from './layout/Logo';
import User from './layout/User';
import Sidebar from './layout/Sidebar';
import JoinButton from './layout/JoinButton';
import Map from './layout/Map';

export default React.forwardRef(({ children }, ref) => {
	return (
		<>
			<Sidebar />
			<div ref={ref} className={layout}>
				{children}
			</div>
			<Logo />
			<User />
			<JoinButton />
			<Map />
		</>
	);
});

const layout = css`
	--layout-width: min(1024px, 80vw);
	position: relative;
	margin: 0 auto;
	width: var(--layout-width);
`;
