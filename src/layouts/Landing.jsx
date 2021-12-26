import { Introduction } from './Introduction'
import { About } from './About'
import { Projects } from './Projects';
import { Technologies } from './Technologies';
import { Contact } from './Contact';

export const Landing = () => {
	return(
		<div id='landing'>
			<Introduction />
			<About />
			<Projects />
			<Technologies />
			<Contact />
		</div>
	);
};