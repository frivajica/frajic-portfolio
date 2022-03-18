import { Introduction } from 'src/layouts/Introduction'
import { About } from 'src/layouts/About'
import { Projects } from 'src/layouts/Projects';
import { Contact } from 'src/layouts/Contact';

export const Landing = () => {
	return (
		<div id='landing'>
			<Introduction />
			<About />
			<Projects />
		</div>
	);
};