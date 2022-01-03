import { Introduction } from './Introduction'
import { About } from './About'
import { Projects } from './Projects';
import { Contact } from './Contact';

export const Landing = () => {
	return (
		<div id='landing'>
			<Introduction />
			<About />
			<Projects />
		</div>
	);
};