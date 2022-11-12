import { useState } from 'react';
import { styled } from '@linaria/react';
import { css, cx } from '@linaria/core';
import MenuControl from '@images/layouts/sidebar/menu_control.png';
import { ReactComponent as Right } from '@images/layouts/sidebar/right.svg';
import sidebarConfig from '@/assets/config/sidebar.json';
import squiggly from '@styles/animations/SquigglyAnim';
import { getAssetsFile } from '@/utils';

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);

	const open = isOpen ? '-1px' : '-135px';
	const maskOpacity = isOpen ? 0.8 : 0;
	const maskPointerEvents = isOpen ? 'auto' : 'none';
	const transform = isOpen ? 'translate(-90%, -50%) rotate(180deg)' : '';

	return (
		<>
			<SidebarStyle className={cx(squiggly)} open={open}>
				<ul>
					{sidebarConfig.map(({ icon, text }) => (
						<li key={text}>
							<a href="/">
								<img
									src={getAssetsFile(
										`/src/assets/images/layouts/sidebar/${icon}`
									)}
									width="60"
									alt={text}
								/>
								{text}
							</a>
						</li>
					))}
				</ul>
				<button
					className={sidebarBtn}
					onClick={() => setIsOpen(!isOpen)}
				>
					<img src={MenuControl} width="61" alt="菜單按鈕" />
					<Right style={{ transform }} />
				</button>
			</SidebarStyle>
			<Mask
				opacity={maskOpacity}
				pointerEvents={maskPointerEvents}
				onClick={() => setIsOpen(false)}
			/>
		</>
	);
}

const SidebarStyle = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 155px;
	background-color: var(--primary-color);
	transform: translateX(${(props) => props.open});
	transition: transform 0.3s;
	z-index: var(--top);

	ul,
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--secondary-color);
	}
	ul {
		padding-top: 20px;
	}
	a {
		margin: 4px;
		padding: 16px;
	}
`;

const sidebarBtn = css`
	position: absolute;
	top: 50%;
	left: calc(100%);
	width: 60px;
	height: 60px;
	transform: translateY(-50%);

	img,
	svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	svg {
		transform: translate(-70%, -50%);
		transition: 0.3s;
	}
`;

const Mask = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;
	background-color: var(--secondary-color);
	opacity: ${(props) => props.opacity};
	transition: opacity 0.3s;
	pointer-events: ${(props) => props.pointerEvents};
`;
