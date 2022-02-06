import { Technologies } from './Technologies';
import { staticInfo } from "../assets/staticInfo";

export const About = () => {
	return(
		<div id='about'>
			<div id='meet-fran'>
				<h2>Meet Fran</h2>
				{staticInfo.meetFran.map( e => <p key={e.paragraph}>{e.text}</p>)}
			</div>
			<Technologies />
		</div>
	);
};