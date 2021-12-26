import logo from '../assets/ico.svg';

export const Header = () => {
	return (
		<nav class='navBar'>
			<a class="nav-logo" href="http://localhost:3000/">
				<img src={logo} alt="Logo" />
			</a>
			<div>
				<a class="aboutNav" href="#about">
					About
				</a>
				<a class="technologiesNav" href="#technologies">
					Technologies
				</a>
				<a class="projectsNav" href="#projects">
					Projects
				</a>
			</div>
			<a class="contactNav" href="#contact">
				Contact
			</a>
		</nav>
	);
};