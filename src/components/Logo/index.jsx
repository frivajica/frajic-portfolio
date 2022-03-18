import logo from "src/assets/images/ico.svg";
import { BurgerMenu } from "src/components/BurgerMenu";
import './Logo.scss'

export const Logo = ({ isSmallScreen }) => {
  return (
    <div id={isSmallScreen ? 'nav-fixed' : ''}>
      <div id="nav-logo">
        <a href="http://localhost:3000/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      {isSmallScreen && <BurgerMenu />}
    </div>
  );
};