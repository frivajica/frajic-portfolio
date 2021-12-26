import logo from '../assets/ico.svg';

export const Logo = () => {
  return (
		<div id="nav-logo" >
				<a href="http://localhost:3000/">
					<img src={logo} alt="Logo" />
				</a>
		</div>
  );
};