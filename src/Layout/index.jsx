import Logo from './Logo';
import User from './User';
import Sidebar from './Sidebar';
import JoinButton from './JoinButton';
import Map from './Map';
import Run from './Run';
import Section from './Section';

export default function Home() {
	const sectionModules = import.meta.glob(
		'/src/assets/config/sections/*.json',
		{
			eager: true,
			import: 'default'
		}
	);

	const sectionsConfig = Object.values(sectionModules);
	const { length } = sectionsConfig;

	return (
		<>
			<Sidebar />
			{sectionsConfig.map((section, index) => (
				<Section
					key={index}
					index={index}
					section={section}
					length={length}
				/>
			))}
			<Logo />
			<User />
			<JoinButton />
			<Map />
			<Run length={length} />
		</>
	);
}
