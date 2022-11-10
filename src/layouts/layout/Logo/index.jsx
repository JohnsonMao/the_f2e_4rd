import { css } from '@linaria/core';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoPng from '@images/layouts/common/logo.png';
import { show, hide } from '@/utils';
import Img from '@/components/Img';

export default function Logo() {
	useLayoutEffect(() => {
		const scrollListener = [];

		gsap.utils.toArray(`.${logoStyle}`).forEach(function (element) {
			scrollListener.push(
				ScrollTrigger.create({
					trigger: element,
					start: 'top 100%',
					end: 'bottom -90%',
					scrub: true,
					markers: true,
					onEnter: function () {
						hide(element);
					},
					onLeave: function () {
						show(element);
					},
					onEnterBack: function () {
						hide(element);
					},
					onLeaveBack: function () {
						show(element);
					}
				})
			);
		});

		return () => scrollListener.forEach((l) => l.revert());
	}, []);

	return (
		<div className={logoStyle}>
			<Img src={LogoPng} alt="The F2E 4rd" />
		</div>
	);
}

const logoStyle = css`
	position: fixed;
	top: 30px;
	left: 30px;
	width: 20%;
	max-width: 250px;
`;
