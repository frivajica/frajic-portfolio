import './BurguerMenu.scss';

export const BurgerMenu = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a className="about-nav" href="#about">
            About
          </a>
          <a className="technologies-nav" href="#technologies">
            Technologies
          </a>
          <a className="projects-nav" href="#projects">
            Projects
          </a>
          <a className="contact-nav" href="#contact">
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
};
