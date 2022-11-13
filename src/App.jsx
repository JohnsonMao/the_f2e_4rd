import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import Layout from '@/Layout';
import Cursor from '@/Layout/Cursor';
import { ReactComponent as SquigglySvg } from '@images/filters/squiggly.svg';

gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);

export const LoadedContext = React.createContext([]);

export default function App() {
	return (
		<LoadedContext.Provider value={[]}>
			<Layout />
			<SquigglySvg />
			{/* <Cursor /> */}
		</LoadedContext.Provider>
	);
}
