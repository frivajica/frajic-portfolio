import React from 'react';
import './Header.scss'

type HeaderProps = {
  isSmallScreen: boolean;
}

export const Header: React.FC<HeaderProps> = ({isSmallScreen}) => {
  return (
    <nav id="header">
      {!isSmallScreen && (
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
          <a className="contact-nav" href="#contact">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};
