import React from 'react';
import { css } from '@linaria/core';
import Logo from './layout/Logo';
import User from './layout/User';
import Sidebar from './layout/Sidebar';
import JoinButton from './layout/JoinButton';
import Map from './layout/Map';
import Run from './layout/Run';

export default React.forwardRef(({ children }, ref) => {
	return (
		<div ref={ref} className={layout}>
			{children}
			<Run />
			<Logo />
			<User />
			<JoinButton />
			<Map />
			<Sidebar />
		</div>
	);
});

const layout = css`
	margin: 0 auto;
	width: 60%;
`;
