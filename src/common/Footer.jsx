import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
	return(
		<div id="footer">
			<div id="residence">
				<h2>Residence</h2>
				<p>Merida, Yucatán, México</p>
			</div>
			<div id='social-networks'>
				<h2>Social Networks</h2>
				<div>
					<FaInstagram size={25} />
					<FaGithub size={25} />
					<FaLinkedinIn size={25} />
				</div>
			</div>
			<div id='copyright'>
				frajic.com © 2022
			</div>
		</div>
	);
};