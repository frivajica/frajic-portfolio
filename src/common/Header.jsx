import {ReactComponent as BrandIco} from '../assets/ico.svg';

export const Header = () => {
	return (
		<>
			<a class="nav-logo" href="http://localhost:3000/">
				<BrandIco />
			</a>
			<nav>
				<a class="aboutNav" href="#about">
					About
				</a>
				<a class="technologiesNav" href="#technologies">
					Technologies
				</a>
				<a class="projectsNav" href="#projects">
					Projects
				</a>
				<a class="contactNav" href="#contact">
					Contact
				</a>
			</nav>
		</>
	);
};