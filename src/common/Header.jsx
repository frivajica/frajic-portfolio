export const Header = () => {
	return (
		<nav id='header'>
			<div>
				<a className="about-nav" href="#about">
					About
				</a>
				<a className="technologies-nav" href="#technologies">
					Technologies
				</a>
				<a className="projects-nav" href="#projects">
					Projects
				</a>
			</div>
			<a className="contact-nav" href="#contact">
				Contact
			</a>
		</nav>
	);
};